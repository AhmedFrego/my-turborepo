import { DateField, ReferenceField, Show, TextField } from 'src/components';

export const PassportShow = () => {
	return (
		<Show>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<ReferenceField
				reference="res_countries"
				source="place_of_issue_id"
			/>
			<DateField source="date_of_issue" />
			<DateField source="date_of_expiry" />
			<TextField source="job_title" />
		</Show>
	);
};
