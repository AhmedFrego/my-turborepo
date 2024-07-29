import {
	BooleanInput as RaBooleanInput,
	BooleanInputProps as RaBooleanInputProps,
} from 'react-admin';
import { useIsColumnRequired, useValidResourceColumn } from 'src/hooks';
import { alwaysArray } from 'src/utils';
import { required } from 'src/validation';

import { GridWrapper, GridWrapperProps } from './GridWrapper';

export interface BooleanInputProps
	extends RaBooleanInputProps,
		GridWrapperProps {}

export const BooleanInput: React.FC<BooleanInputProps> = props => {
	const { fullWidth = true, grid, source, validate, ...rest } = props;

	const isRequired = useIsColumnRequired(props);

	useValidResourceColumn(props);

	return (
		<GridWrapper grid={grid}>
			<RaBooleanInput
				fullWidth={fullWidth}
				source={source}
				validate={
					isRequired ? [required(), ...alwaysArray(validate)] : validate
				}
				variant="outlined"
				{...rest}
			/>
		</GridWrapper>
	);
};
