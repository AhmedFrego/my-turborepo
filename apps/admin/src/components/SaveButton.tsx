import React from 'react';
import {
	SaveButton as RaSaveButton,
	SaveButtonProps as RaSaveButtonProps,
} from 'react-admin';

export interface SaveButtonProps extends RaSaveButtonProps {}

export const SaveButton: React.FC<SaveButtonProps> = props => {
	const { ...rest } = props;

	return <RaSaveButton {...rest} />;
};
