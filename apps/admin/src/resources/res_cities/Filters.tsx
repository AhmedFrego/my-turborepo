import { ReferenceInput, SearchInput, SelectInput } from 'src/components';

export const filters = [
	<SearchInput
		key="city_ascii@ilike"
		alwaysOn
		source="city_ascii@ilike"
	/>,
	<SelectInput
		key="capital"
		alwaysOn
		choices={[
			{ id: '', name: 'None' },
			{ id: 'minor', name: 'Minor' },
			{ id: 'primary', name: 'Primary' },
			{ id: 'admin', name: 'Admin' },
		]}
		label="Capital"
		source="capital"
	/>,
	<ReferenceInput
		key="countries@ilike"
		alwaysOn
		optionText="name"
		reference="res_countries"
		source="country_id"
	/>,
];
