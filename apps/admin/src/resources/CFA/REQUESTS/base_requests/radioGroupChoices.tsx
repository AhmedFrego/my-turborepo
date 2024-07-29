import { FilterDefinition, FilterOperator } from '@react-admin/ra-form-layout';
import { CommonInputProps, RadioButtonGroupInput } from 'react-admin';

type Config = {
	choices: unknown[];
	operators?: ('eq' | 'neq')[];
	optionText?: string;
	optionValue?: string;
};

export const radioGroupChoices = (config: Config): FilterDefinition => {
	const {
		choices,
		operators: includedOperators = ['eq', 'neq'],
		optionText,
		optionValue,
	} = config;

	const operators: FilterOperator[] = [];

	if (includedOperators.includes('eq')) {
		operators.push({
			label: 'ra-form-layout.filters.operators.eq',
			value: 'eq',
		});
	}

	if (includedOperators.includes('neq')) {
		operators.push({
			label: 'ra-form-layout.filters.operators.neq',
			value: 'neq',
		});
	}

	return {
		input: (props: CommonInputProps) => (
			<RadioButtonGroupInput
				choices={choices}
				helperText={false}
				optionText={optionText}
				optionValue={optionValue}
				{...props}
			/>
		),
		operators,
	};
};
