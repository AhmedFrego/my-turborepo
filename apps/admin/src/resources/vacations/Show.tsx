import {
	DateField,
	ReferenceField,
	ReferenceTypeField,
	Show,
	TextField,
} from 'src/components';

export const VacationShow = () => {
	return (
		<Show>
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
		</Show>
	);
};
