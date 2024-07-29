import React from 'react';
import {
	EmailField as RaEmailField,
	EmailFieldProps as RaEmailFieldProps,
} from 'react-admin';
import { useValidResourceColumn } from 'src/hooks';

export interface EmailFieldProps extends RaEmailFieldProps {}

export const EmailField: React.FC<EmailFieldProps> = props => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return <RaEmailField {...rest} />;
};
