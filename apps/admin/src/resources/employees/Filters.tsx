import { DateInput, EnumInput, SearchInput } from 'src/components';

export const filters = [
	<SearchInput
		key="full_name@ilike"
		alwaysOn
		source="full_name@ilike"
	/>,
	<EnumInput
		key="gender"
		enumName="genders"
		source="gender"
	/>,
	<DateInput
		key="date_of_birth@gte"
		source="date_of_birth@gte"
	/>,
	<DateInput
		key="date_of_birth@lte"
		source="date_of_birth@lte"
	/>,
];
