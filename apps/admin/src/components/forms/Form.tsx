import React from 'react';
import { Form as RaForm, FormProps as RaFormProps } from 'react-admin';

export interface FormProps extends RaFormProps {}

export const Form: React.FC<FormProps> = props => {
	const { ...rest } = props;

	return <RaForm {...rest} />;
};
