import React from 'react';
import {
	ListToolbar as RaListToolbar,
	ListToolbarProps as RaListToolbarProps,
} from 'react-admin';

export interface ListToolbarProps extends RaListToolbarProps {}

export const ListToolbar: React.FC<ListToolbarProps> = props => {
	const { ...rest } = props;

	return <RaListToolbar {...rest} />;
};
