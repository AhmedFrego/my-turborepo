import { List, NumberField, ReferenceField, TextField } from 'src/components';

import { filters } from './Filters';

export const ResCityList = () => {
	return (
		<List filters={filters}>
			<TextField source="name" />
			<TextField source="city_ascii" />
			<NumberField source="lat" />
			<NumberField source="lng" />
			<TextField source="admin_name" />
			<TextField source="capital" />
			<NumberField source="population" />
			<ReferenceField
				reference="res_countries"
				source="country_id"
			/>
		</List>
	);
};
