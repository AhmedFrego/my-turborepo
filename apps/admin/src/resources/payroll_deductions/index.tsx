import { managed_admin } from 'src/resources/helpers';

import { PayrollDeductionCreate } from './Create';
import { PayrollDeductionEdit } from './Edit';
import { PayrollDeductionList } from './List';
import { PayrollDeductionShow } from './Show';

export const PayrollDeductions = managed_admin({
	create: PayrollDeductionCreate,
	edit: PayrollDeductionEdit,
	list: PayrollDeductionList,
	name: 'payroll_deductions',
	show: PayrollDeductionShow,
});
