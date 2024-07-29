import { ReactElement } from 'react';
import {
	NumberInput as RaNumberInput,
	NumberInputProps as RaNumberInputProps,
} from 'react-admin';
import { useIsColumnRequired, useValidResourceColumn } from 'src/hooks';
import { TranslationsPaths } from 'src/locales';
import { alwaysArray } from 'src/utils';
import { required } from 'src/validation';

import { GridWrapper, GridWrapperProps } from './GridWrapper';

export interface NumberInputProps extends RaNumberInputProps, GridWrapperProps {
	helperText?: false | ReactElement | TranslationsPaths;
	label?: false | ReactElement | TranslationsPaths;
}

export const NumberInput: React.FC<NumberInputProps> = props => {
	const { fullWidth = true, grid, source, validate, ...rest } = props;

	const isRequired = useIsColumnRequired(props);

	useValidResourceColumn(props);

	return (
		<GridWrapper grid={grid}>
			<RaNumberInput
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
