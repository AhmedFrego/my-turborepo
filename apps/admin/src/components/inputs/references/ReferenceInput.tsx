import {
	ReferenceInput as RaReferenceInput,
	ReferenceInputProps as RaReferenceInputProps,
} from 'react-admin';
import { AutocompleteInput, AutocompleteInputProps } from 'src/components';
import { useIsColumnRequired, useValidResourceColumn } from 'src/hooks';
import { Nested, NonJoinPublicTables } from 'src/types';
import { alwaysArray } from 'src/utils';
import { required } from 'src/validation';

import { GridWrapper, GridWrapperProps } from '../GridWrapper';

export type ReferenceTables = Exclude<
	NonJoinPublicTables,
	'template' | 'types'
>;

export interface ReferenceInputProps<
	T extends ReferenceTables = ReferenceTables,
> extends Omit<RaReferenceInputProps, 'validate'>,
		GridWrapperProps {
	autocompleteProps?: AutocompleteInputProps;
	disabled?: boolean;
	optionText?: Nested<T>;
	reference: T;
	source: string;
	validate?: AutocompleteInputProps['validate'];
}

export const ReferenceInput = <T extends ReferenceTables>(
	props: ReferenceInputProps<T>,
) => {
	const {
		autocompleteProps,
		children,
		disabled,
		fullWidth,
		grid,
		optionText,
		source,
		validate,
		...rest
	} = props;
	const isRequired = useIsColumnRequired(props);

	useValidResourceColumn(props);

	return (
		<GridWrapper grid={grid}>
			<RaReferenceInput
				disabled={disabled}
				fullWidth={!!fullWidth}
				source={source}
				{...rest}
			>
				{children ?? (
					<AutocompleteInput
						disabled={disabled}
						fullWidth={!!fullWidth}
						optionText={optionText}
						validate={
							isRequired ? [required(), ...alwaysArray(validate)] : validate
						}
						variant="outlined"
						{...autocompleteProps}
					/>
				)}
			</RaReferenceInput>
		</GridWrapper>
	);
};
