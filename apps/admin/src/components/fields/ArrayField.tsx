import React from 'react';
import {
	ArrayField as RaArrayField,
	ArrayFieldProps as RaArrayFieldProps,
} from 'react-admin';
import { useValidResourceColumn } from 'src/hooks';

export interface ArrayFieldProps extends RaArrayFieldProps {}

export const ArrayField: React.FC<ArrayFieldProps> = props => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return <RaArrayField {...rest} />;
};
