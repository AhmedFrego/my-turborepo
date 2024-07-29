import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import { useSessionContext } from './hooks';

export interface AnonOnlyRouteProps {}

export const AnonOnlyRoute: React.FC<
	React.PropsWithChildren<AnonOnlyRouteProps>
> = props => {
	const { children } = props;

	const location = useLocation();
	const navigate = useNavigate();
	const session = useSessionContext();

	if (session.isLoading) {
		return null;
	} else if (session.session?.user.id) {
		if (location.key === 'default') {
			return <Navigate to="/" />;
		} else {
			navigate(-1);

			return null;
		}
	} else return children;
};
