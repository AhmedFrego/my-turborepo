import { managed_admin } from 'src/resources/helpers';

import { RequestAllowanceCreate } from './Create';
import { RequestAllowanceEdit } from './Edit';
import { RequestAllowanceList } from './List';
import { RequestAllowanceShow } from './Show';

export const RequestAllowances = managed_admin({
	create: RequestAllowanceCreate,
	edit: RequestAllowanceEdit,
	list: RequestAllowanceList,
	name: 'request_allowances',
	show: RequestAllowanceShow,
});
