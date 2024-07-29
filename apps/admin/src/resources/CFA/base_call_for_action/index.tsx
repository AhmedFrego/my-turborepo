import { managed_admin } from 'src/resources/helpers';

import { BaseCallForActionCreate } from './Create';
import { BaseCallForActionEdit } from './Edit';
import { BaseCallForActionList } from './List';
import { BaseCallForActionShow } from './Show';

export const BaseCallForAction = managed_admin({
	create: BaseCallForActionCreate,
	edit: BaseCallForActionEdit,
	list: BaseCallForActionList,
	name: 'base_call_for_action',
	show: BaseCallForActionShow,
});
