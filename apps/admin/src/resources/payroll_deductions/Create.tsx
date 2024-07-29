import {
	Create,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

export const PayrollDeductionCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<ReferenceTypeInput
					category={Categories.PayrollDeductions}
					source="payroll_deduction_type_id"
				/>
				<TextInput source="amount" />
			</SimpleFormConfigurable>
		</Create>
	);
};
