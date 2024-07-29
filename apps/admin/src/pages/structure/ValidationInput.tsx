import { TextField, TextFieldProps } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useTranslate } from 'src/hooks';

export const ValidationInput = (
	props: {
		app: 'app' | 'dashboard';
		column: number | string;
		level: 'preferable' | 'required';
		table: string;
	} & TextFieldProps,
) => {
	const { app, column, fullWidth = true, level, table, ...rest } = props;
	const id = `validation.${app}.${level}.${table}.${column}`;
	const translate = useTranslate();

	const { register } = useFormContext();

	return (
		<TextField
			multiline
			fullWidth={fullWidth}
			id={id}
			label={translate(`custom.common.validation.subs.${level}`)}
			minRows={4}
			variant="outlined"
			{...rest}
			{...register(id)}
		/>
	);
};
