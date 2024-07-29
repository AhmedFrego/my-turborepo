import {
	AutocompleteInput as RaAutocompleteInput,
	AutocompleteInputProps as RaAutocompleteInputProps,
} from 'react-admin';
import { ilikeFilterToQuery } from 'src/utils';

import { GridWrapper, GridWrapperProps } from './GridWrapper';

export interface AutocompleteInputProps
	extends RaAutocompleteInputProps,
		GridWrapperProps {}

export const AutocompleteInput: React.FC<AutocompleteInputProps> = props => {
	const { filterToQuery, fullWidth = true, grid, optionText, ...rest } = props;

	return (
		<GridWrapper grid={grid}>
			<RaAutocompleteInput
				filterToQuery={
					filterToQuery ??
					(typeof optionText === 'string'
						? ilikeFilterToQuery(optionText)
						: undefined)
				}
				fullWidth={fullWidth}
				isOptionEqualToValue={(option, value) => {
					return option.id === value.id;
				}}
				optionText={optionText}
				variant="outlined"
				{...rest}
			/>
		</GridWrapper>
	);
};
