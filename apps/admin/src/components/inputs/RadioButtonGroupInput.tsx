import React from 'react';
import {
	RadioButtonGroupInput as RaRadioButtonGroupInput,
	RadioButtonGroupInputProps as RaRadioButtonGroupInputProps,
} from 'react-admin';
import { useValidResourceColumn } from 'src/hooks';

export interface RadioButtonGroupInputProps
	extends RaRadioButtonGroupInputProps {}

export const RadioButtonGroupInput: React.FC<
	RadioButtonGroupInputProps
> = props => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return <RaRadioButtonGroupInput {...rest} />;
};
