import {
	EmailField,
	List,
	ReferenceField,
	TextField,
	UrlField,
} from 'src/components';

import { filters } from './Filters';

export const EntityList = () => {
	return (
		<List
			dataGridProps={{ omit: [] }}
			filters={filters}
		>
			<TextField source="name" />
			<TextField source="trading_number" />
			<TextField source="tax_number" />
			<TextField source="activity" />
			<TextField source="type" />
			<ReferenceField
				reference="entity_types"
				source="entity_type_id"
			/>
			<EmailField source="email" />
			<TextField source="phone" />
			<ReferenceField
				reference="images"
				source="logo_id"
			/>
			<UrlField source="website" />
		</List>
	);
};
