import {
	Create,
	PhoneInput,
	ReferenceInput,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

export const EmergencyContactCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<TextInput
					grid={{ sm: 6 }}
					source="name"
				/>
				<PhoneInput
					grid={{ sm: 6 }}
					source="phone"
				/>
				<ReferenceTypeInput
					category={Categories.EmergencyRelationships}
					grid={{ sm: 6 }}
					source="relation_type_id"
				/>
				<ReferenceInput
					grid={{ sm: 6 }}
					optionText="full_name"
					reference="employees"
					source="employee_id"
				/>
			</SimpleFormConfigurable>
		</Create>
	);
};
