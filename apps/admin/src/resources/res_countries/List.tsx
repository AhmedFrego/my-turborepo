import { List, ReferenceField, TextField } from 'src/components';

import { filters } from './Filters';

export const ResCountryList = () => {
	return (
		<List filters={filters}>
			<TextField source="name" />
			<TextField source="iso2" />
			<TextField source="iso3" />
			<TextField source="local_name" />
			<TextField source="nationality" />
			<ReferenceField
				reference="res_currencies"
				source="currency_id"
			/>
		</List>
	);
};
