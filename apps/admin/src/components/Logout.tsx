import React from 'react';
import { Logout as RaLogout, LogoutProps as RaLogoutProps } from 'react-admin';
import { AuthenticationRoutes } from 'src/constants';

export interface LogoutProps extends RaLogoutProps {}

export const Logout: React.FC<LogoutProps> = props => {
	const { ...rest } = props;

	return (
		<RaLogout
			redirectTo={`/${AuthenticationRoutes.Login}`}
			{...rest}
		/>
	);
};
