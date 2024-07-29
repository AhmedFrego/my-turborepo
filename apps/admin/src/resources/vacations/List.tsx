import {
	DateField,
	List,
	ReferenceField,
	ReferenceTypeField,
	TextField,
} from 'src/components';

import { filters } from './Filters';

export const VacationList = () => {
	return (
		<List filters={filters}>
			<TextField source="name" />
			<DateField source="from" />
			<DateField source="to" />
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<ReferenceTypeField source="vacation_type_id" />
			<ReferenceField
				reference="request_vacations"
				source="request_vacation_id"
			/>
		</List>
	);
};
