import { managed_admin } from 'src/resources/helpers';

import { CommissionCreate } from './Create';
import { CommissionEdit } from './Edit';
import { CommissionList } from './List';
import { CommissionShow } from './Show';

export const Commissions = managed_admin({
	create: CommissionCreate,
	edit: CommissionEdit,
	list: CommissionList,
	name: 'commissions',
	show: CommissionShow,
});
