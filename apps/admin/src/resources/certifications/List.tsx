import {
	DateField,
	List,
	ReferenceField,
	TextField,
	UrlField,
} from 'src/components';

import { filters } from './Filters';

export const CertificationList = () => {
	return (
		<List filters={filters}>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<TextField source="name" />
			<TextField source="specialization" />
			<TextField source="level" />
			<DateField source="date_of_issue" />
			<DateField source="date_of_expiry" />
			<TextField source="issuing_organization" />
			<UrlField source="credential_url" />
			<TextField source="credential_number" />
		</List>
	);
};
