import { Toolbar as RaToolbar } from '@react-admin/ra-rbac';
import React from 'react';
import { ToolbarProps as RaToolbarProps } from 'react-admin';

export interface ToolbarProps extends RaToolbarProps {}

export const Toolbar: React.FC<ToolbarProps> = props => {
	const { ...rest } = props;

	return <RaToolbar {...rest} />;
};
