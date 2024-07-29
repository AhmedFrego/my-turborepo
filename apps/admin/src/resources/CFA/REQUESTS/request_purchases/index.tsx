import { managed_admin } from 'src/resources/helpers';

import { RequestPurchaseCreate } from './Create';
import { RequestPurchaseEdit } from './Edit';
import { RequestPurchaseList } from './List';
import { RequestPurchaseShow } from './Show';

export const RequestPurchases = managed_admin({
	create: RequestPurchaseCreate,
	edit: RequestPurchaseEdit,
	list: RequestPurchaseList,
	name: 'request_purchases',
	show: RequestPurchaseShow,
});
