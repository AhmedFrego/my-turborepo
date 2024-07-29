import { managed_admin } from 'src/resources/helpers';

import { BaseRequestCreate } from './Create';
import { BaseRequestEdit } from './Edit';
import { BaseRequestList } from './List';
import { BaseRequestShow } from './Show';

export const BaseRequests = managed_admin({
	create: BaseRequestCreate,
	edit: BaseRequestEdit,
	list: BaseRequestList,
	name: 'base_requests',
	show: BaseRequestShow,
});
