import {
	Edit,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

export const PayrollDeductionEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<ReferenceTypeInput
					category={Categories.PayrollDeductions}
					source="payroll_deduction_type_id"
				/>
				<TextInput source="amount" />
			</SimpleFormConfigurable>
		</Edit>
	);
};
