import {
	DateInput,
	Edit,
	ReferenceInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';

export const CertificationEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<ReferenceInput
					optionText="full_name"
					reference="employees"
					source="employee_id"
				/>
				<TextInput
					grid={{ md: 4 }}
					source="name"
				/>
				<TextInput
					grid={{ md: 4 }}
					source="specialization"
				/>
				<TextInput
					grid={{ md: 4 }}
					source="level"
				/>
				<DateInput
					grid={{ sm: 6 }}
					source="date_of_issue"
				/>
				<DateInput
					grid={{ sm: 6 }}
					source="date_of_expiry"
				/>
				<TextInput
					grid={{ md: 6 }}
					source="issuing_organization"
				/>
				<TextInput
					grid={{ md: 6 }}
					source="credential_number"
				/>
				<TextInput
					source="credential_url"
					type="url"
				/>
			</SimpleFormConfigurable>
		</Edit>
	);
};
