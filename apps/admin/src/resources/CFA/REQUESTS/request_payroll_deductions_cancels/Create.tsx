import { ReferenceInput, TextInput } from 'src/components';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestPayrollDeductionsCancelCreate = () => {
	return (
		<BaseRequestCreate>
			<ReferenceInput
				optionText="amount"
				reference="deductions"
				source="deduction_id"
			/>
			<TextInput source="reason" />
		</BaseRequestCreate>
	);
};
