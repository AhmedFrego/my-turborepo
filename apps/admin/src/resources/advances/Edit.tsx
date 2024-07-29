import {
	DateInput,
	Edit,
	NumberInput,
	ReferenceInput,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

export const AdvanceEdit = () => {
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
					source="notes"
				/>
				<NumberInput
					grid={{ sm: 12 }}
					source="installments"
				/>
				<DateInput
					grid={{ sm: 6 }}
					source="date_of_payment"
				/>
				<DateInput
					grid={{ sm: 6 }}
					source="date_of_receipt"
				/>
				<ReferenceTypeInput
					category={Categories.Advances}
					source="advance_type_id"
				/>
			</SimpleFormConfigurable>
		</Edit>
	);
};
