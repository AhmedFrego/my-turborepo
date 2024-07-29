import { managed_admin } from 'src/resources/helpers';

import { RequestPayrollDeductionsCancelCreate } from './Create';
import { RequestPayrollDeductionsCancelEdit } from './Edit';
import { RequestPayrollDeductionsCancelList } from './List';
import { RequestPayrollDeductionsCancelShow } from './Show';

export const RequestPayrollDeductionsCancels = managed_admin({
	create: RequestPayrollDeductionsCancelCreate,
	edit: RequestPayrollDeductionsCancelEdit,
	list: RequestPayrollDeductionsCancelList,
	name: 'request_payroll_deductions_cancels',
	show: RequestPayrollDeductionsCancelShow,
});
