import React from 'react';
import {
	NumberField as RaNumberField,
	NumberFieldProps as RaNumberFieldProps,
} from 'react-admin';
import { useValidResourceColumn } from 'src/hooks';

export interface NumberFieldProps extends RaNumberFieldProps {}

export const NumberField: React.FC<NumberFieldProps> = props => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return <RaNumberField {...rest} />;
};
