import React from 'react';
import {
	DateField as RaDateField,
	DateFieldProps as RaDateFieldProps,
} from 'react-admin';
import { useLocale, useValidResourceColumn } from 'src/hooks';

export interface DateFieldProps extends RaDateFieldProps {}

export const DateField: React.FC<DateFieldProps> = props => {
	const { ...rest } = props;
	const { locale } = useLocale();

	useValidResourceColumn(props);

	return (
		<RaDateField
			locales={locale}
			{...rest}
		/>
	);
};
