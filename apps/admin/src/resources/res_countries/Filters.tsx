import { ReferenceInput, SearchInput } from 'src/components';

export const filters = [
	<SearchInput
		key="name@ilike"
		alwaysOn
		source="name@ilike"
	/>,
	<ReferenceInput
		key="currencies"
		optionText="name"
		reference="res_currencies"
		source="currency_id"
	/>,
];
