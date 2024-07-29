import {
	DateInput,
	Edit,
	ReferenceInput,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

export const DriverLicenseEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<ReferenceInput
					optionText="full_name"
					reference="employees"
					source="employee_id"
				/>
				<TextInput
					grid={{ sm: 6 }}
					source="license_number"
				/>
				<TextInput
					grid={{ sm: 6 }}
					source="type"
				/>
				<DateInput
					grid={{ md: 6 }}
					source="date_of_issue"
				/>
				<DateInput
					grid={{ md: 6 }}
					source="date_of_expiry"
				/>
				<ReferenceTypeInput
					category={Categories.BloodTypes}
					source="blood_type_id"
				/>
			</SimpleFormConfigurable>
		</Edit>
	);
};
