import { managed_admin } from 'src/resources/helpers';

import { StatusHistoryCreate } from './Create';
import { StatusHistoryEdit } from './Edit';
import { StatusHistoryList } from './List';
import { StatusHistoryShow } from './Show';

export const StatusHistories = managed_admin({
	create: StatusHistoryCreate,
	edit: StatusHistoryEdit,
	list: StatusHistoryList,
	name: 'status_histories',
	show: StatusHistoryShow,
});
