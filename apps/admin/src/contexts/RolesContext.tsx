import { MongoQuery, SubjectRawRule } from '@casl/ability';
import { PostgrestError } from '@supabase/supabase-js';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import maxBy from 'lodash/maxBy';
import sortBy from 'lodash/sortBy';
import React, { createContext, useMemo } from 'react';
import { CaslActions, CaslSubjects } from 'src/casl';
import { useEmployeeContext, useUser } from 'src/hooks';

import { employeeRolesQuery } from './dataHelpers';

type EmployeeRoles = Awaited<ReturnType<typeof employeeRolesQuery>>['data'];

export interface RolesContextProps {
	error: null | PostgrestError;
	isFetching: boolean;
	isLoading: boolean;
	maxLevel: number;
	permissions: SubjectRawRule<CaslActions, CaslSubjects, MongoQuery>[];
	roles: EmployeeRoles | null;
}

export const RolesContext = createContext<RolesContextProps>({
	error: null,
	isFetching: false,
	isLoading: false,
	maxLevel: 0,
	permissions: [],
	roles: null,
});

export interface RolesProviderProps {}

export const RolesProvider: React.FC<
	React.PropsWithChildren<RolesProviderProps>
> = props => {
	const { children } = props;
	const user = useUser();
	const { current } = useEmployeeContext();

	const {
		data: roles = null,
		error,
		isFetching,
		isLoading,
	} = useQuery(
		// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
		employeeRolesQuery(user?.id!, current!),
		{ enabled: !!user?.id && !!current },
	);

	const value = useMemo<RolesContextProps>(() => {
		const sortedRoles = sortBy(roles, [role => role.roles?.level]);

		return {
			error,
			isFetching,
			isLoading,
			maxLevel: maxBy(sortedRoles, o => o.roles?.level)?.roles?.level ?? 0,
			permissions: sortedRoles.flatMap(
				role =>
					role.roles?.permissions as unknown as SubjectRawRule<
						CaslActions,
						CaslSubjects,
						MongoQuery
					>[],
			),
			roles: sortedRoles,
		};
	}, [error, isFetching, isLoading, roles]);

	return (
		<RolesContext.Provider value={value}>{children}</RolesContext.Provider>
	);
};
