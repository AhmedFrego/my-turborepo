import { Menu as RaMenu } from '@react-admin/ra-rbac';
import React from 'react';
import { MenuProps as RaMenuProps } from 'react-admin';

export interface MenuProps extends RaMenuProps {}

export const Menu: React.FC<MenuProps> = props => {
	const { ...rest } = props;

	return <RaMenu {...rest} />;
};
