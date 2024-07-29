import { managed_admin } from 'src/resources/helpers';

import { RequestBonusCreate } from './Create';
import { RequestBonusEdit } from './Edit';
import { RequestBonusList } from './List';
import { RequestBonusShow } from './Show';

export const RequestBonuses = managed_admin({
	create: RequestBonusCreate,
	edit: RequestBonusEdit,
	list: RequestBonusList,
	name: 'request_bonuses',
	show: RequestBonusShow,
});
