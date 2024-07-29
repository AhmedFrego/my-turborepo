import {
	DateField,
	List,
	ReferenceField,
	ReferenceTypeField,
	TextField,
} from 'src/components';

import { filters } from './Filters';

export const VisaList = () => {
	return (
		<List filters={filters}>
			<DateField source="from" />
			<DateField source="to" />
			<TextField source="id_number" />
			<ReferenceTypeField source="visa_type_id" />
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<ReferenceField
				reference="res_countries"
				source="country_of_issue_id"
			/>
		</List>
	);
};
