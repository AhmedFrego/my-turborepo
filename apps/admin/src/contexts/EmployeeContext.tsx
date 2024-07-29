import * as Sentry from '@sentry/react';
import { PostgrestError } from '@supabase/supabase-js';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { usePostHog } from 'posthog-js/react';
import React, { createContext, useCallback, useEffect, useMemo } from 'react';
import { StoreKeys } from 'src/constants';
import { useStore, useUser } from 'src/hooks';
import { Logger, safeStringify } from 'src/utils';
import { SetOptional } from 'type-fest';

import {
	contractQuery,
	employeeEntitiesQuery,
	employeeQuery,
} from './dataHelpers';

type EmployeeEntities = Awaited<
	ReturnType<typeof employeeEntitiesQuery>
>['data'];
type Employee = Awaited<ReturnType<typeof employeeQuery>>['data'];
type Contract = Awaited<ReturnType<typeof contractQuery>>['data'];
type Current = null | string;

export interface EmployeeContextProps {
	contract: NonNullable<Contract>[0] | null;
	current: Current;
	employee: Employee | null;
	entities: EmployeeEntities | null;
	error: null | PostgrestError;
	isFetching: boolean;
	isLoading: boolean;
	setCurrent: (value?: Current) => void;
}

export type DataProviderEmployeeContext = SetOptional<
	EmployeeContextProps,
	'setCurrent'
>;

export const EmployeeContext = createContext<EmployeeContextProps>({
	contract: null,
	current: null,
	employee: null,
	entities: null,
	error: null,
	isFetching: false,
	isLoading: false,
	setCurrent: () => {},
});

export interface EmployeeProviderProps {}

export const EmployeeProvider: React.FC<
	React.PropsWithChildren<EmployeeProviderProps>
> = props => {
	const { children } = props;
	const posthog = usePostHog();
	const user = useUser();

	const [current, setBaseCurrent] = useStore<Current>(
		StoreKeys.CurrentEntities,
		null,
	);

	const {
		data: entities = null,
		error: entitiesError,
		isFetching: isFetchingEntities,
		isLoading: isLoadingEntities,
	} = useQuery(
		// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
		employeeEntitiesQuery(user?.id!),
		{ enabled: !!user?.id },
	);

	const {
		data: employee = null,
		error: employeeError,
		isFetching: isFetchingEmployee,
		isLoading: isLoadingEmployee,
	} = useQuery(
		// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
		employeeQuery(user?.id!),
		{ enabled: !!user?.id },
	);

	const {
		data: contract = null,
		error: contractError,
		isFetching: isFetchingContract,
		isLoading: isLoadingContract,
	} = useQuery(
		// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
		contractQuery(user?.id!),
		{ enabled: !!user?.id },
	);

	const validateCurrent = useCallback(
		(value?: Parameters<EmployeeContextProps['setCurrent']>[0]) => {
			const userEntities = entities?.map(item => item.entities?.id) ?? [];

			if (
				value &&
				typeof value === 'string' &&
				value.length > 0 &&
				userEntities.includes(value)
			) {
				return value;
			}

			Logger.error(
				`Invalid current: ${safeStringify(value)} of type ${typeof value}`,
			);

			return null; // Return null if validation fails
		},
		[entities],
	);

	const setCurrent: EmployeeContextProps['setCurrent'] = useCallback(
		(value?: Current) => {
			const validValue = validateCurrent(value);

			if (validValue) {
				setBaseCurrent(validValue);
			} else {
				Logger.error(`Invalid current: ${safeStringify(value)}`);
			}
		},
		[setBaseCurrent, validateCurrent],
	);

	useEffect(() => {
		if (user?.id && entities && employee && contract) {
			const userEmail = user?.email ?? null;
			const userName = String(employee?.full_name);

			if (userEmail) {
				Sentry.setUser({
					email: userEmail,
					id: user?.id,
					username: userName,
				});
			}

			posthog?.identify(user?.id, {
				email: userEmail,
				name: userName,
			});
			for (const { entities: entity } of entities) {
				if (entity?.id) posthog?.group('company', entity.id);
			}
		} else {
			Sentry.setUser(null);
			posthog.reset();
		}
	}, [entities, employee, contract, user?.id, user?.email, posthog]);

	const combinedError = useMemo(
		() => entitiesError ?? employeeError ?? contractError,
		[contractError, employeeError, entitiesError],
	);

	const isLoading = useMemo(
		() => isLoadingEntities ?? isLoadingEmployee ?? isLoadingContract,
		[isLoadingContract, isLoadingEmployee, isLoadingEntities],
	);

	const isFetching = useMemo(
		() => isFetchingEntities ?? isFetchingEmployee ?? isFetchingContract,
		[isFetchingContract, isFetchingEmployee, isFetchingEntities],
	);

	const value = useMemo<EmployeeContextProps>(
		() => ({
			contract: contract?.[0] ?? null,
			current,
			employee,
			entities,
			error: combinedError,
			isFetching,
			isLoading,
			setCurrent,
		}),
		[
			contract,
			current,
			employee,
			entities,
			combinedError,
			isFetching,
			isLoading,
			setCurrent,
		],
	);

	return (
		<EmployeeContext.Provider value={value}>
			{children}
		</EmployeeContext.Provider>
	);
};
