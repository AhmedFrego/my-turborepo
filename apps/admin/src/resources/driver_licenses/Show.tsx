import {
	DateField,
	ReferenceField,
	ReferenceTypeField,
	Show,
	TextField,
} from 'src/components';

export const DriverLicenseShow = () => {
	return (
		<Show>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<TextField source="license_number" />
			<TextField source="type" />
			<DateField source="date_of_issue" />
			<DateField source="date_of_expiry" />
			<ReferenceTypeField source="blood_type_id" />
		</Show>
	);
};
