import {
	DateField,
	ReferenceField,
	ReferenceTypeField,
	Show,
	TextField,
} from 'src/components';

export const VisaShow = () => {
	return (
		<Show>
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
		</Show>
	);
};
