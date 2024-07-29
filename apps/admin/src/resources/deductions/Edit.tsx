import {
	Edit,
	NumberInput,
	ReferenceInput,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

export const DeductionEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<ReferenceInput
					optionText="full_name"
					reference="employees"
					source="employee_id"
				/>
				<NumberInput
					grid={{ sm: 6 }}
					source="amount"
				/>
				<TextInput
					grid={{ sm: 6 }}
					source="reason"
				/>
				<ReferenceTypeInput
					category={Categories.Deductions}
					grid={{ sm: 6 }}
					source="deduction_type_id"
				/>
				<TextInput
					grid={{ sm: 6 }}
					source="note"
				/>
			</SimpleFormConfigurable>
		</Edit>
	);
};
