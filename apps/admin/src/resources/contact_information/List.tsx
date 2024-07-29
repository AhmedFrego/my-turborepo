import {
	EmailField,
	List,
	ReferenceField,
	TextField,
	UrlField,
} from 'src/components';

import { filters } from './Filters';

export const ContactInformationList = () => {
	return (
		<List filters={filters}>
			<EmailField source="email" />
			<TextField source="employee_name" />
			<TextField source="phone" />
			<UrlField source="website" />
			<ReferenceField
				reference="addresses"
				source="address_id"
			/>
		</List>
	);
};
