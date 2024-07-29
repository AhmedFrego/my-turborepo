import React from 'react';
import {
	UpdateButton as RaUpdateButton,
	UpdateButtonProps as RaUpdateButtonProps,
} from 'react-admin';

export type UpdateButtonProps = RaUpdateButtonProps;

export const UpdateButton: React.FC<UpdateButtonProps> = props => {
	const { ...rest } = props;

	return <RaUpdateButton {...rest} />;
};
