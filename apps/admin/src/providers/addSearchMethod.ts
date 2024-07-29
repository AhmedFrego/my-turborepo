import { SearchDataProvider, SearchResult } from '@react-admin/ra-search';
import { DataProvider } from 'react-admin';
import { RaRecord } from 'src/hooks';

/**
 * A helper function to create a `ra-search`-compatible `dataProvider` based
 * on a regular react-admin `dataProvider`. This helper function adds the `search` method
 * by calling the regular `getList()` method with a filter object containing
 * a `q` key on the configured resources. The value of the `q` filter will be
 * the search query.
 *
 * Be aware that this builder will call the regular `dataProvider` several times,
 * for each resource. We don't recommend using it in production - instead, you
 * should modify your API to support the search method, and return data structures
 * in the format expected by `ra-search`.
 *
 * The builder requires either an array of resources names or a map of the resources
 * specifying how to format their records for search results.
 *
 * If provided an array of resources, it will infer the records fields to use as
 * the content label and description:
 *
 * - label: Returns the record `label`, `name` or `title`
 * - description: Returns the record `description` or `body`
 *
 * If provided a map, each key being a resource name, the value can have the
 * following properties:
 *
 * - `label`: Either the field name to use as the label or a function which
 * will be called with a record and must return a string. Defaults to the
 * inference described above.
 * - `description`: Either the field name to use as the description or a
 * function which will be called with a record and must return a string.
 * Defaults to the inference described above.
 * - `redirect`: Optional. Argument that defines if the redirection is done on a show or edit page. In case the redirection is also defined globally, the per-resource one takes precedence.
 *
 * @example <caption>Example with an array of resources</caption>
 * import simpleRestProvider from 'ra-data-simple-rest';
 * import { addSearchMethod } from '@react-admin/ra-search';
 *
 * const dataProvider = simpleRestProvider('http://path.to.my.api/');
 *
 * const dataProviderWithSearch = addSearchMethod(dataProvider, ['artists', 'albums']);
 *
 * @example <caption>Example with an array of resources and global redirection</caption>
 * import simpleRestProvider from 'ra-data-simple-rest';
 * import { addSearchMethod } from '@react-admin/ra-search';
 *
 * const dataProvider = simpleRestProvider('http://path.to.my.api/');
 *
 * const dataProviderWithSearch = addSearchMethod(dataProvider, ['artists', 'albums'], 'show');
 *
 *
 * @example <caption>Example with a map of resources</caption>
 * import simpleRestProvider from 'ra-data-simple-rest';
 * import { addSearchMethod } from '@react-admin/ra-search';
 *
 * const dataProvider = simpleRestProvider('http://path.to.my.api/');
 *
 * const dataProviderWithSearch = addSearchMethod(dataProvider, {
 *     artists: {
 *         label: 'full_name',
 *         description: record => `${record.born_at}-${record.died_at} ${record.biography}`,
 *         redirect: 'show',
 *     },
 *     albums: {
 *         description: record => `${record.released_at.getFullYear()} by ${record.recordCompany}`,
 *     },
 * });
 *
 * @param dataProvider The dataProvider to augment
 * @param options The options, either a string array of resources names or a map of options where the key is the resource name
 */
export const addSearchMethod = (
	dataProvider: DataProvider,
	options: AddSearchMethodResourceOptionsMap = {},
	redirect: RedirectType = 'edit',
): SearchDataProvider => {
	const builderOptions = options;
	const defaultTargets = Object.keys(options);

	return {
		...dataProvider,
		search: async (query, options) => {
			const finalTargets = options?.targets ?? defaultTargets;

			const resultsByResource = await Promise.all(
				finalTargets
					.filter(item => item in builderOptions)
					.map(resource =>
						searchInResource(
							dataProvider,
							resource,
							query,
							builderOptions[resource],
							redirect,
						),
					),
			);

			return {
				data: resultsByResource.reduce(
					(accumulator, resultForResource) => [
						...accumulator,
						...resultForResource.data,
					],
					[],
				),
				total: resultsByResource.reduce(
					(accumulator, resultForResource) =>
						accumulator + resultForResource.total,
					0,
				),
			};
		},
	};
};

type AddSearchMethodResourceOptionsMap = Record<
	string,
	AddSearchMethodResourceOptions
>;

export type RedirectType = 'edit' | 'show';

export type GetValueFromRecordFunction<RecordType extends RaRecord = RaRecord> =
	(record?: RecordType) => string;

export type AddSearchMethodResourceOptions<
	RecordType extends RaRecord = RaRecord,
> = {
	description?: GetValueFromRecordFunction<RecordType> | string;
	field: string;
	label?: GetValueFromRecordFunction<RecordType> | string;
	redirect?: RedirectType;
};

const defaultGetLabel = (record: RaRecord) =>
	record.label || record.name || record.title;

const defaultGetDescription = (record: RaRecord) =>
	record.description || record.body;

const getUrl = (resource: string, record: RaRecord, redirect: RedirectType) => {
	if (redirect === 'show') {
		return `/${resource}/${record.id}/${redirect}`;
	}

	return `/${resource}/${record.id}`;
};

const searchInResource = async (
	dataProvider: DataProvider,
	resource: string,
	query: string,
	options: AddSearchMethodResourceOptions,
	redirect: RedirectType,
): Promise<SearchResult> => {
	const { data, total } = await dataProvider.getList(resource, {
		filter: { [`${options.field}@ilike`]: query },
		pagination: { page: 1, perPage: 10 },
		sort: { field: 'id', order: 'ASC' },
	});

	const { description = defaultGetDescription, label = defaultGetLabel } =
		options;

	return {
		data: data.map(record => ({
			content: {
				description:
					typeof description === 'string'
						? record[description]
						: description(record),
				id: record.id,
				label: typeof label === 'string' ? record[label] : label(record),
			},
			id: `${resource}/${record.id}`,
			type: resource,
			url: getUrl(resource, record, options.redirect ?? redirect),
		})),
		total,
	};
};
