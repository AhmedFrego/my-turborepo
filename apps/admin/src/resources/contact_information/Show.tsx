import {
	EmailField,
	ReferenceField,
	Show,
	TextField,
	UrlField,
} from 'src/components';

export const ContactInformationShow = () => {
	return (
		<Show>
			<EmailField source="email" />
			<TextField source="employee_name" />
			<TextField source="phone" />
			<UrlField source="website" />
			<ReferenceField
				reference="addresses"
				source="address_id"
			/>
		</Show>
	);
};
