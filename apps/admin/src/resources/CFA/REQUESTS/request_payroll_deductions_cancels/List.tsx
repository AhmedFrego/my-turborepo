import { ReferenceField, TextField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestPayrollDeductionsCancelList = () => {
	return (
		<BaseRequestList filters={filters}>
			<ReferenceField
				reference="deductions"
				source="deduction_id"
			/>
			<TextField source="reason" />
		</BaseRequestList>
	);
};
