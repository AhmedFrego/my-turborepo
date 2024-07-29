import {
	DateInput,
	Edit,
	ReferenceInput,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

export const VacationEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<TextInput source="name" />
				<DateInput source="from" />
				<DateInput source="to" />
				<ReferenceInput
					reference="employees"
					source="employee_id"
				/>
				<ReferenceTypeInput
					category={Categories.Vacations}
					source="vacation_type_id"
				/>
				<ReferenceInput
					reference="request_vacations"
					source="request_vacation_id"
				/>
			</SimpleFormConfigurable>
		</Edit>
	);
};
