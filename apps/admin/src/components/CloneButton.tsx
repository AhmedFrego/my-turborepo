import React from 'react';
import {
	CloneButton as RaCloneButton,
	CloneButtonProps as RaCloneButtonProps,
} from 'react-admin';

export interface CloneButtonProps extends RaCloneButtonProps {}

export const CloneButton: React.FC<CloneButtonProps> = props => {
	const { ...rest } = props;

	return <RaCloneButton {...rest} />;
};
