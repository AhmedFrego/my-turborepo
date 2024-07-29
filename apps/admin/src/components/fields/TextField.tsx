import React from 'react';
import {
	TextField as RaTextField,
	TextFieldProps as RaTextFieldProps,
} from 'react-admin';
import { useValidResourceColumn } from 'src/hooks';
import { NonJoinPublicTables } from 'src/types';

export interface TextFieldProps extends RaTextFieldProps {
	resource?: NonJoinPublicTables;
}

export const TextField: React.FC<TextFieldProps> = props => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return <RaTextField {...rest} />;
};
