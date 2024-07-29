import {
	DateInput,
	Edit,
	ReferenceInput,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

export const VisaEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<DateInput source="from" />
				<DateInput source="to" />
				<TextInput source="id_number" />
				<ReferenceTypeInput
					category={Categories.Visas}
					source="visa_type_id"
				/>
				<ReferenceInput
					optionText="full_name"
					reference="employees"
					source="employee_id"
				/>
				<ReferenceInput
					optionText="name"
					reference="res_countries"
					source="country_of_issue_id"
				/>
			</SimpleFormConfigurable>
		</Edit>
	);
};
