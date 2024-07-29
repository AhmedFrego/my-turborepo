import { managed_admin } from 'src/resources/helpers';

import { RequestTransferCreate } from './Create';
import { RequestTransferEdit } from './Edit';
import { RequestTransferList } from './List';
import { RequestTransferShow } from './Show';

export const RequestTransfers = managed_admin({
	create: RequestTransferCreate,
	edit: RequestTransferEdit,
	list: RequestTransferList,
	name: 'request_transfers',
	show: RequestTransferShow,
});
