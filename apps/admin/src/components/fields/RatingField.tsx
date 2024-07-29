import { Rating, RatingProps } from '@mui/material';
import React from 'react';
import { FieldProps, sanitizeFieldRestProps, useFieldValue } from 'react-admin';
import { SetRequired } from 'type-fest';

export interface RatingFieldProps
	extends SetRequired<FieldProps, 'source'>,
		RatingProps {
	transform?: (value: number) => number;
}

export const RatingField: React.FC<RatingFieldProps> = props => {
	const { transform = number => number, ...rest } = props;

	const value = useFieldValue(props);

	return (
		<Rating
			readOnly
			value={transform(Number(value))}
			{...sanitizeFieldRestProps(rest)}
		/>
	);
};
