import { List, ReferenceField, TextField } from 'src/components';

import { filters } from './Filters';

export const AddressList = () => {
	return (
		<List filters={filters}>
			<ReferenceField
				reference="res_countries"
				source="country_id"
			/>
			<ReferenceField
				reference="res_cities"
				source="city_id"
			/>
			<TextField source="street" />
			<TextField source="building" />
			<TextField source="landmark" />
		</List>
	);
};
