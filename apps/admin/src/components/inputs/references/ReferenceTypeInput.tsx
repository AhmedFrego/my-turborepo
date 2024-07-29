import { AutocompleteInput, AutocompleteInputProps } from 'src/components';
import { Categories } from 'src/constants';
import { useIsColumnRequired, useLocale } from 'src/hooks';
import { alwaysArray, getTypeOptionText } from 'src/utils';
import { required } from 'src/validation';
import { SetOptional } from 'type-fest';

import { CreateInlineTypeWithCategory } from './CreateInlineTypeWithCategory';
import {
	ReferenceInput as RaReferenceInput,
	ReferenceInputProps as RaReferenceInputProps,
	ReferenceTables,
} from './ReferenceInput';

export interface ReferenceTypeInputProps
	extends SetOptional<Omit<RaReferenceInputProps, 'validate'>, 'reference'> {
	category: Categories;
	disabled?: boolean;
	source: string;
	validate?: AutocompleteInputProps['validate'];
}

export const ReferenceTypeInput = (props: ReferenceTypeInputProps) => {
	const {
		category,
		disabled,
		filter,
		fullWidth = true,
		source,
		validate,
		...rest
	} = props;

	const { locale } = useLocale();
	const isRequired = useIsColumnRequired(props);

	return (
		<RaReferenceInput
			disabled={disabled}
			filter={{ category, ...(filter as object) }}
			fullWidth={!!fullWidth}
			reference={'types' as ReferenceTables}
			source={source}
			{...rest}
		>
			<AutocompleteInput
				create={<CreateInlineTypeWithCategory category={category} />}
				disabled={disabled}
				filterToQuery={(searchText: string) => ({
					[`name->>${locale}@ilike`]: `%${searchText}%`,
				})}
				fullWidth={!!fullWidth}
				optionText={choice => getTypeOptionText(choice, locale)}
				validate={
					isRequired ? [required(), ...alwaysArray(validate)] : validate
				}
				variant="outlined"
			/>
		</RaReferenceInput>
	);
};
