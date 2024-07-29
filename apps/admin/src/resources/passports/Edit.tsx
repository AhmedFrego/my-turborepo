import {
	DateInput,
	Edit,
	ReferenceInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';

export const PassportEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<ReferenceInput
					optionText="full_name"
					reference="employees"
					source="employee_id"
				/>
				<DateInput source="date_of_issue" />
				<DateInput source="date_of_expiry" />
				<ReferenceInput
					optionText="name"
					reference="res_countries"
					source="place_of_issue_id"
				/>
				<TextInput source="job_title" />
			</SimpleFormConfigurable>
		</Edit>
	);
};
