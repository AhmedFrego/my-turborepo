import {
	DateInput,
	Edit,
	ImageInput,
	ReferenceInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';

export const IdentificationCardEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<TextInput
					grid={{ sm: 6 }}
					source="id_number"
				/>
				<TextInput
					grid={{ sm: 6 }}
					source="job_title"
				/>
				<ReferenceInput
					grid={{ sm: 6 }}
					optionText="full_name"
					reference="employees"
					source="employee_id"
				/>
				<ReferenceInput
					grid={{ sm: 6 }}
					optionText="name"
					reference="res_countries"
					source="place_of_issue_id"
				/>
				<DateInput
					grid={{ sm: 6 }}
					source="date_of_expiry"
				/>
				<DateInput
					grid={{ sm: 6 }}
					source="date_of_issue"
				/>
				<ImageInput source="front_image_id" />
				<ImageInput source="back_image_id" />
			</SimpleFormConfigurable>
		</Edit>
	);
};
