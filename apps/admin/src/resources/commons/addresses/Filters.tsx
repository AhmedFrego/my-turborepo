import { ReferenceInput } from 'src/components';

export const addressFilters = [
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
