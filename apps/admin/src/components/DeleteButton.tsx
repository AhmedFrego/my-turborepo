import React from 'react';
import {
	DeleteButton as RaDeleteButton,
	DeleteButtonProps as RaDeleteButtonProps,
} from 'react-admin';

export interface DeleteButtonProps extends RaDeleteButtonProps {}

export const DeleteButton: React.FC<DeleteButtonProps> = props => {
	const { ...rest } = props;

	return <RaDeleteButton {...rest} />;
};
