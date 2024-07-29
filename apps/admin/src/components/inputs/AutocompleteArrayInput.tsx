import {
	AutocompleteArrayInput as RaAutocompleteArrayInput,
	AutocompleteArrayInputProps as RaAutocompleteArrayInputProps,
} from 'react-admin';
import { ilikeFilterToQuery } from 'src/utils';

import { GridWrapper, GridWrapperProps } from './GridWrapper';

export interface AutocompleteArrayInputProps
	extends RaAutocompleteArrayInputProps,
		GridWrapperProps {}

export const AutocompleteArrayInput: React.FC<
	AutocompleteArrayInputProps
> = props => {
	const {
		blurOnSelect,
		disableCloseOnSelect = true,
		filterToQuery,
		fullWidth = true,
		grid,
		optionText,
		...rest
	} = props;

	return (
		<GridWrapper grid={grid}>
			<RaAutocompleteArrayInput
				blurOnSelect={
					blurOnSelect ?? (disableCloseOnSelect ? false : undefined)
				}
				disableCloseOnSelect={disableCloseOnSelect}
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
