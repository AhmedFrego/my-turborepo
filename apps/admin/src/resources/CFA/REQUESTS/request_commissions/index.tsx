import { managed_admin } from 'src/resources/helpers';

import { RequestCommissionCreate } from './Create';
import { RequestCommissionEdit } from './Edit';
import { RequestCommissionList } from './List';
import { RequestCommissionShow } from './Show';

export const RequestCommissions = managed_admin({
	create: RequestCommissionCreate,
	edit: RequestCommissionEdit,
	list: RequestCommissionList,
	name: 'request_commissions',
	show: RequestCommissionShow,
});
