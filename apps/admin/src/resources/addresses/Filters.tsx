import { ReferenceInput, SearchInput } from 'src/components';

export const filters = [
	<SearchInput
		key="street@ilike"
		alwaysOn
		source="street@ilike"
	/>,
	<ReferenceInput
		key="res_countries"
		alwaysOn
		optionText="name"
		reference="res_countries"
		source="country_id"
	/>,
	<ReferenceInput
		key="res_cities"
		alwaysOn
		optionText="city_ascii"
		reference="res_cities"
		source="city_id"
	/>,
];
