import { managed_admin } from 'src/resources/helpers';

import { RequestAdvanceCreate } from './Create';
import { RequestAdvanceEdit } from './Edit';
import { RequestAdvanceList } from './List';
import { RequestAdvanceShow } from './Show';

export const RequestAdvances = managed_admin({
	create: RequestAdvanceCreate,
	edit: RequestAdvanceEdit,
	list: RequestAdvanceList,
	name: 'request_advances',
	show: RequestAdvanceShow,
});
