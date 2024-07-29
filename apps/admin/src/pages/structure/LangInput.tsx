import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { LanguageCodeEnum } from 'src/constants';
import { LocalizationLanguages } from 'src/utils';

export interface LangInputProps {
	langCode: LanguageCodeEnum;
	name: number | string;
	sub: 'fields' | 'helperText' | 'privacy';
	table: string;
}

export const LangInput: React.FC<
	LangInputProps & Omit<TextFieldProps, keyof LangInputProps>
> = props => {
	const { fullWidth = true, langCode, name, sub, table, ...rest } = props;
	const id = `${langCode}.${table}.${sub}.${name}`;

	const { register } = useFormContext();

	return (
		<TextField
			fullWidth={fullWidth}
			id={id}
			label={LocalizationLanguages[langCode].label}
			variant="outlined"
			{...rest}
			{...register(id)}
		/>
	);
};
