import { managed_admin } from 'src/resources/helpers';

import { RequestSettlementCreate } from './Create';
import { RequestSettlementEdit } from './Edit';
import { RequestSettlementList } from './List';
import { RequestSettlementShow } from './Show';

export const RequestSettlements = managed_admin({
	create: RequestSettlementCreate,
	edit: RequestSettlementEdit,
	list: RequestSettlementList,
	name: 'request_settlements',
	show: RequestSettlementShow,
});
