import { Rating, RatingProps } from '@mui/material';
import { useInput } from 'src/components';
import { useValidResourceColumn } from 'src/hooks';
import { InputProps, sanitizeInputRestProps } from 'src/types';

import { GridWrapper, GridWrapperProps } from './GridWrapper';

export interface RatingInputProps
	extends InputProps<number>,
		GridWrapperProps,
		Omit<RatingProps, keyof InputProps<number>> {
	defaultValue?: number;
}

export const RatingInput: React.FC<RatingInputProps> = props => {
	const {
		defaultValue,
		format,
		grid,
		name,
		onBlur,
		onChange,
		parse,
		resource,
		...rest
	} = props;

	useValidResourceColumn(props);

	const { field } = useInput({
		defaultValue,
		format,
		name,
		onBlur,
		onChange,
		parse,
		resource,
		...rest,
	});

	return (
		<GridWrapper grid={grid}>
			<Rating
				{...sanitizeInputRestProps(rest)}
				{...field}
			/>
		</GridWrapper>
	);
};
