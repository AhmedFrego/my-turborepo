import React from 'react';
import {
	PasswordInput as RaPasswordInput,
	PasswordInputProps as RaPasswordInputProps,
} from 'react-admin';
import { useValidResourceColumn } from 'src/hooks';

export interface PasswordInputProps extends RaPasswordInputProps {}

export const PasswordInput: React.FC<PasswordInputProps> = props => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return <RaPasswordInput {...rest} />;
};
