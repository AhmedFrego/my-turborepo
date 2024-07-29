import React from 'react';
import {
	ArrayInput as RaArrayInput,
	ArrayInputProps as RaArrayInputProps,
} from 'react-admin';
import { useValidResourceColumn } from 'src/hooks';

export interface ArrayInputProps extends RaArrayInputProps {}

export const ArrayInput: React.FC<ArrayInputProps> = props => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return <RaArrayInput {...rest} />;
};
