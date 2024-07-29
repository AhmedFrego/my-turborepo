import React from 'react';
import {
	UserMenu as RaUserMenu,
	UserMenuProps as RaUserMenuProps,
} from 'react-admin';

export interface UserMenuProps extends RaUserMenuProps {}

export const UserMenu: React.FC<UserMenuProps> = props => {
	const { ...rest } = props;

	return <RaUserMenu {...rest} />;
};
