import React from 'react';
import { useWatch } from 'react-hook-form';
import {
	AutocompleteInput,
	AutocompleteInputProps,
	ReferenceInput,
	ReferenceInputProps,
} from 'src/components';
import { useValidResourceColumn } from 'src/hooks';

import { GridWrapper, GridWrapperProps } from './GridWrapper';

export interface CityInputProps
	extends ReferenceInputProps,
		GridWrapperProps,
		Omit<AutocompleteInputProps, keyof ReferenceInputProps> {
	watch: string;
}

export const CityInput: React.FC<CityInputProps> = props => {
	const { filter, fullWidth = true, grid, watch, ...rest } = props;

	useValidResourceColumn(props);

	const country_id = useWatch<{ [K: typeof watch]: string }>({ name: watch });

	return (
		<GridWrapper grid={grid}>
			<ReferenceInput
				filter={{ [watch]: country_id, ...filter }}
				{...rest}
			>
				<AutocompleteInput
					disabled={!country_id}
					fullWidth={!!fullWidth}
					optionText="city_ascii"
					variant="outlined"
				/>
			</ReferenceInput>
		</GridWrapper>
	);
};
