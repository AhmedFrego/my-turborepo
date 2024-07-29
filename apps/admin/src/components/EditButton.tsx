import React from 'react';
import {
	EditButton as RaEditButton,
	EditButtonProps as RaEditButtonProps,
} from 'react-admin';

export interface EditButtonProps extends RaEditButtonProps {}

export const EditButton: React.FC<EditButtonProps> = props => {
	const { ...rest } = props;

	return <RaEditButton {...rest} />;
};
