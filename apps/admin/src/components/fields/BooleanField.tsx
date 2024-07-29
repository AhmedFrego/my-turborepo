import React from 'react';
import {
	BooleanField as RaBooleanField,
	BooleanFieldProps as RaBooleanFieldProps,
} from 'react-admin';
import { useValidResourceColumn } from 'src/hooks';

export interface BooleanFieldProps extends RaBooleanFieldProps {}

export const BooleanField: React.FC<BooleanFieldProps> = props => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return <RaBooleanField {...rest} />;
};
