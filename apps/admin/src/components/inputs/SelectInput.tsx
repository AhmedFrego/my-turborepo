import {
	SelectInput as RaSelectInput,
	SelectInputProps as RaSelectInputProps,
} from 'react-admin';
import { useIsColumnRequired, useValidResourceColumn } from 'src/hooks';
import { alwaysArray } from 'src/utils';
import { required } from 'src/validation';

import { GridWrapper, GridWrapperProps } from './GridWrapper';

export interface SelectInputProps
	extends RaSelectInputProps,
		GridWrapperProps {}

export const SelectInput: React.FC<SelectInputProps> = props => {
	const { grid, source, validate, ...rest } = props;

	const isRequired = useIsColumnRequired(props);

	useValidResourceColumn(props);

	return (
		<GridWrapper grid={grid}>
			<RaSelectInput
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
