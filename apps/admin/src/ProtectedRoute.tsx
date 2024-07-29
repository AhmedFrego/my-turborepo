import queryString from 'query-string';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthenticationRoutes } from './constants';
import { useSessionContext } from './hooks';

export interface ProtectedRouteProps {}

export const ProtectedRoute: React.FC<
	React.PropsWithChildren<ProtectedRouteProps>
> = props => {
	const { children } = props;
	const session = useSessionContext();
	const { pathname, search } = useLocation();

	if (session.isLoading) return null;

	const redirectUrl = queryString.stringify({
		redirect: `${pathname}${search}`,
	});

	return session.session?.user.id ? (
		children
	) : (
		<Navigate
			to={{
				pathname: `/${AuthenticationRoutes.Login}`,
				search: `${redirectUrl}`,
			}}
		/>
	);
};
