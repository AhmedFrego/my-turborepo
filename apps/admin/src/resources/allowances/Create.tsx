import {
	Create,
	DateInput,
	NumberInput,
	ReferenceInput,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

export const AllowanceCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<ReferenceInput
					optionText="full_name"
					reference="employees"
					source="employee_id"
				/>
				<NumberInput
					grid={{ sm: 6 }}
					source="suggested_amount"
				/>
				<ReferenceTypeInput
					category={Categories.Allowances}
					grid={{ sm: 6 }}
					source="allowance_type_id"
				/>
				<TextInput
					grid={{ sm: 6 }}
					source="notes"
				/>
				<DateInput source="date_of_received" />
			</SimpleFormConfigurable>
		</Create>
	);
};
