import { EmailInput, PhoneInput, TextInput } from 'src/components';

export const ContactInformationCreate = () => {
	return (
		<>
			<TextInput
				grid={{ sm: 6 }}
				source="employee_name"
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
				grid={{ sm: 6 }}
				source="website"
				type="url"
			/>
		</>
	);
};
