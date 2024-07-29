import React from 'react';
import {
	CreateButton as RaCreateButton,
	CreateButtonProps as RaCreateButtonProps,
} from 'react-admin';

export interface CreateButtonProps extends RaCreateButtonProps {}

export const CreateButton: React.FC<CreateButtonProps> = props => {
	const { ...rest } = props;

	return <RaCreateButton {...rest} />;
};
