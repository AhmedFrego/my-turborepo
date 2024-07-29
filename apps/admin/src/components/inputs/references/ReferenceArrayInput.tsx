import React from 'react';
import {
	ReferenceArrayInput as RaReferenceArrayInput,
	ReferenceArrayInputProps as RaReferenceArrayInputProps,
} from 'react-admin';
import { useValidResourceColumn } from 'src/hooks';

export interface ReferenceArrayInputProps extends RaReferenceArrayInputProps {}

export const ReferenceArrayInput: React.FC<
	ReferenceArrayInputProps
> = props => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return <RaReferenceArrayInput {...rest} />;
};
