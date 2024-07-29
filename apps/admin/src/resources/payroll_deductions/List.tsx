import { List, ReferenceTypeField, TextField } from 'src/components';

import { filters } from './Filters';

export const PayrollDeductionList = () => {
	return (
		<List filters={filters}>
			<ReferenceTypeField source="payroll_deduction_type_id" />
			<TextField source="amount" />
		</List>
	);
};
