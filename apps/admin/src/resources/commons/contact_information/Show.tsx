import { EmailField, TextField, UrlField } from 'src/components';

export const ContactInformationShow = [
	<EmailField
		key="email"
		source="email"
	/>,
	<TextField
		key="employee_name"
		source="employee_name"
	/>,
	<TextField
		key="phone"
		source="phone"
	/>,
	<UrlField
		key="website"
		source="website"
	/>,
];
