import { ReferenceField, TextField } from 'src/components';

export const AddressShow = [
	<ReferenceField
		key="country_id"
		reference="res_countries"
		source="country_id"
	/>,
	<ReferenceField
		key="city_id"
		reference="res_cities"
		source="city_id"
	/>,
	<TextField
		key="street"
		source="street"
	/>,
	<TextField
		key="building"
		source="building"
	/>,
	<TextField
		key="landmark"
		source="landmark"
	/>,
];
