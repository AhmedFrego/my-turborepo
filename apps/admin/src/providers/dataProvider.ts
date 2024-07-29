import defaultsDeep from 'lodash/defaultsDeep';
import get from 'lodash/get';
import isNull from 'lodash/isNull';
import isObject from 'lodash/isObject';
import omitBy from 'lodash/omitBy';
import set from 'lodash/set';
import Pluralize from 'pluralize';
import { supabaseDataProvider } from 'ra-supabase';
import { useCallback, useMemo } from 'react';
import {
	CreateParams,
	DataProvider,
	ResourceCallback,
	ResourceCallbacks,
} from 'react-admin';
import { withLifecycleCallbacks } from 'src/components';
import { EmployeeContextProps } from 'src/contexts';
import { RaRecord, useEmployeeContext, useSupabaseClient } from 'src/hooks';
import { requests } from 'src/resources/resourceCategory';
import { Database } from 'src/types';
import { Logger, logMessages } from 'src/utils';

import { addSearchMethod } from './addSearchMethod';
import {
	isReactAdminImageObject,
	ReactAdminImageObject,
	uploadImage,
} from './helpers';
import { supabaseKey, supabaseUrl } from './instance';
import { primaryKeys } from './joinTables';

const BUCKET_NAME = 'images_bucket';

type NoOwnerTables = {
	[K in keyof Database['public']['Tables']]: 'owner_id' extends keyof Database['public']['Tables'][K]['Row']
		? never
		: K;
}[keyof Database['public']['Tables']];

const NO_OWNER_TABLES = new Set<NoOwnerTables>([
	'employees',
	'entities',
	'entity_types',
	'group_invites',
	'group_users',
	'groups',
	'jsonschema_validators',
	'res_cities',
	'res_countries',
	'res_currencies',
	'surveys',
]);

const isOwnerTable = (resource: string) =>
	!NO_OWNER_TABLES.has(resource as NoOwnerTables);

const addGlobalFilters = <U extends object>(
	params: U,
	resource: string,
	employee: EmployeeContextProps,
) => {
	if (!isOwnerTable(resource)) return Promise.resolve(params);

	const { current } = employee;

	// @ts-ignore - pass
	const newParams: U = {};

	if (get(params, 'filter.owner_id@in')) {
		Logger.log({ params, resource });
	}

	if (current) set(newParams, 'filter.owner_id@in', `(${current})`);
	else throw new Error('No employee entities selected');

	// ? allow overriding global filters
	return Promise.resolve(defaultsDeep(params, newParams) as U);
};

const beforeCreateEmptyValues: ResourceCallback<CreateParams<RaRecord>> = ({
	data,
	...params
}) => Promise.resolve({ ...params, data: omitBy(data, isNull) });

const beforeSaveImages: ResourceCallback<RaRecord> = async (
	data,
	_,
	resource,
) => {
	if (!isObject(data)) {
		logMessages('beforeSave(notObject): ', data);

		return data;
	}

	const res = await Promise.all(
		Object.entries(data)
			.filter(([, value]) => isReactAdminImageObject(value))
			.map(async ([key, file]) => {
				const { id } = await uploadImage(
					file as ReactAdminImageObject,
					BUCKET_NAME,
					`${resource}/${Pluralize.plural(key.replace('_id', ''))}/${new Date().toISOString()}`,
				);

				return [key, id ?? null] as const;
			}),
	);

	for (const [key, value] of res) {
		// @ts-ignore - pass
		data[key] = value;
	}

	return data;
};

export const useDataProviderInstance = () => {
	const employee = useEmployeeContext();
	const supabase = useSupabaseClient();

	const addGlobalFiltersMemo = useCallback(
		<U extends object>(
			params: U,
			_: DataProvider,
			resource: string,
		): Promise<U> => addGlobalFilters(params, resource, employee),
		[employee],
	);

	const beforeSaveDefaultValues = useCallback<ResourceCallback<RaRecord>>(
		(data, _, resource) => {
			if (isOwnerTable(resource) && !get(data, 'owner_id')) {
				set(data, 'owner_id', employee.current);
			}

			return Promise.resolve(data);
		},
		[employee],
	);

	const baseDataProvider = useMemo(
		() =>
			supabaseDataProvider({
				apiKey: supabaseKey,
				instanceUrl: supabaseUrl,
				primaryKeys,
				supabaseClient: supabase,
			}),
		[supabase],
	);

	const lifecycleCallbacks = useMemo<ResourceCallbacks>(
		() => ({
			beforeCreate: [beforeCreateEmptyValues],
			beforeDelete: [addGlobalFiltersMemo],
			beforeDeleteMany: [addGlobalFiltersMemo],
			beforeGetList: [addGlobalFiltersMemo],
			beforeGetManyReference: [addGlobalFiltersMemo],
			beforeGetOne: [addGlobalFiltersMemo],
			beforeSave: [beforeSaveImages, beforeSaveDefaultValues],
			beforeUpdate: [addGlobalFiltersMemo],
			beforeUpdateMany: [addGlobalFiltersMemo],
			resource: '*',
		}),
		[addGlobalFiltersMemo, beforeSaveDefaultValues],
	);

	return withLifecycleCallbacks(
		addSearchMethod(
			baseDataProvider,
			{
				employees: {
					field: 'full_name',
					label: record => record?.full_name,
					redirect: 'show',
				},
				...Object.fromEntries(
					requests
						.filter(item => item !== 'base_requests')
						.map(item => [
							item,
							{
								field: 'title',
								redirect: 'show',
							},
						]),
				),
			},
			'show',
		),
		[lifecycleCallbacks],
	);
};
