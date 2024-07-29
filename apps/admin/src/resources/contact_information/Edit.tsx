import {
	Edit,
	EmailInput,
	PhoneInput,
	ReferenceInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';

export const ContactInformationEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<TextInput
					grid={{ sm: 6 }}
					source="employee_name"
				/>
				<ReferenceInput
					grid={{ sm: 6 }}
					optionText="street"
					reference="addresses"
					source="address_id"
				/>
				<EmailInput
					grid={{ sm: 6 }}
					source="email"
				/>
				<PhoneInput
					grid={{ sm: 6 }}
					source="phone"
				/>
				<TextInput
					source="website"
					type="url"
				/>
			</SimpleFormConfigurable>
		</Edit>
	);
};
