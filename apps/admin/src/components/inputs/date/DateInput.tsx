import { useIsColumnRequired, useValidResourceColumn } from 'src/hooks';
import { alwaysArray } from 'src/utils';
import { required } from 'src/validation';

import {
	DateInput as RaDateInput,
	DateInputProps as RaDateInputProps,
} from './mui';
import { GridWrapper, GridWrapperProps } from '../GridWrapper';

export interface DateInputProps extends RaDateInputProps, GridWrapperProps {}

export const DateInput: React.FC<DateInputProps> = props => {
	const { fullWidth = true, grid, source, validate, ...rest } = props;

	const isRequired = useIsColumnRequired(props);

	useValidResourceColumn(props);

	return (
		<GridWrapper grid={grid}>
			<RaDateInput
				fullWidth={fullWidth}
				source={source}
				validate={
					isRequired === true
						? [required(), ...alwaysArray(validate)]
						: validate
				}
				variant="outlined"
				{...rest}
			/>
		</GridWrapper>
	);
};
