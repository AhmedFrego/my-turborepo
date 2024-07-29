import { ReferenceInput, TextInput } from 'src/components';

import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestPayrollDeductionsCancelEdit = () => {
	return (
		<BaseRequestEdit>
			<ReferenceInput
				optionText="amount"
				reference="deductions"
				source="deduction_id"
			/>
			<TextInput source="reason" />
		</BaseRequestEdit>
	);
};
