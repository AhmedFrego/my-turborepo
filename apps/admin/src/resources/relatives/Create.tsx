import {
	Create,
	DateInput,
	EnumInput,
	ReferenceInput,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

export const RelativeCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<TextInput source="name" />
				<DateInput source="date_of_birth" />
				<EnumInput
					enumName="genders"
					grid={{ sm: 6 }}
					source="gender"
				/>
				<ReferenceTypeInput
					category={Categories.Relations}
					grid={{ sm: 6 }}
					source="relation_types_id"
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
