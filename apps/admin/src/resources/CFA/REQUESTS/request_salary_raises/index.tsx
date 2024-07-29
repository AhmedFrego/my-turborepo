import { managed_admin } from 'src/resources/helpers';

import { RequestSalaryRaiseCreate } from './Create';
import { RequestSalaryRaiseEdit } from './Edit';
import { RequestSalaryRaiseList } from './List';
import { RequestSalaryRaiseShow } from './Show';

export const RequestSalaryRaises = managed_admin({
	create: RequestSalaryRaiseCreate,
	edit: RequestSalaryRaiseEdit,
	list: RequestSalaryRaiseList,
	name: 'request_salary_raises',
	show: RequestSalaryRaiseShow,
});
