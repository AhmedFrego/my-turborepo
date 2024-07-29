import React from 'react';
import {
	ReferenceArrayField as RaReferenceArrayField,
	ReferenceArrayFieldProps as RaReferenceArrayFieldProps,
} from 'react-admin';
import { useValidResourceColumn } from 'src/hooks';

export interface ReferenceArrayFieldProps extends RaReferenceArrayFieldProps {}

export const ReferenceArrayField: React.FC<
	ReferenceArrayFieldProps
> = props => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return <RaReferenceArrayField {...rest} />;
};
