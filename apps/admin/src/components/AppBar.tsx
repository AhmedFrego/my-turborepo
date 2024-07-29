import React from 'react';
import { AppBar as RaAppBar, AppBarProps as RaAppBarProps } from 'react-admin';

export interface AppBarProps extends RaAppBarProps {}

export const AppBar: React.FC<AppBarProps> = props => {
	const { ...rest } = props;

	return <RaAppBar {...rest} />;
};
