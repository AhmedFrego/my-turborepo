import React from 'react';
import {
	ShowButton as RaShowButton,
	ShowButtonProps as RaShowButtonProps,
} from 'react-admin';

export interface ShowButtonProps extends RaShowButtonProps {}

export const ShowButton: React.FC<ShowButtonProps> = props => {
	const { ...rest } = props;

	return <RaShowButton {...rest} />;
};
