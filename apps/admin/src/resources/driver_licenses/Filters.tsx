import { SearchInput } from 'src/components';

export const filters = [
	<SearchInput
		key="date_of_expiry@ilike"
		alwaysOn
		source="date_of_expiry@ilike"
	/>,
];
