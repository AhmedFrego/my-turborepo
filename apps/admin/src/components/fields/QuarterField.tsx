import { Typography, TypographyProps } from '@mui/material';
import { format } from 'date-fns';
import React from 'react';
import { FieldProps, useFieldValue } from 'react-admin';
import { SetRequired } from 'type-fest';

export interface QuarterFieldProps
	extends SetRequired<FieldProps, 'source'>,
		Omit<TypographyProps, keyof FieldProps> {}

export const QuarterField: React.FC<QuarterFieldProps> = props => {
	const { ...rest } = props;

	const value = useFieldValue(props) as Date;

	const date = new Date(String(value));

	return (
		<Typography
			component="span"
			variant="body2"
			{...rest}
		>
			{format(date, 'yyyy QQQ')}
		</Typography>
	);
};
