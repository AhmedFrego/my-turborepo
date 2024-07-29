import { ReferenceField, TextField } from 'src/components';

import { BaseRequestShow } from '../base_requests/Show';

export const RequestPayrollDeductionsCancelShow = () => {
	return (
		<BaseRequestShow>
			<ReferenceField
				reference="deductions"
				source="deduction_id"
			/>
			<TextField source="reason" />
		</BaseRequestShow>
	);
};
