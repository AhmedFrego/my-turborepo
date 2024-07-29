import { ReferenceTypeField, Show, TextField } from 'src/components';

export const PayrollDeductionShow = () => {
	return (
		<Show>
			<ReferenceTypeField source="payroll_deduction_type_id" />
			<TextField source="amount" />
		</Show>
	);
};
