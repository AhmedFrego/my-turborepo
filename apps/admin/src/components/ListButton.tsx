import React from 'react';
import {
	ListButton as RaListButton,
	ListButtonProps as RaListButtonProps,
} from 'react-admin';

export interface ListButtonProps extends RaListButtonProps {}

export const ListButton: React.FC<ListButtonProps> = props => {
	const { ...rest } = props;

	return <RaListButton {...rest} />;
};
