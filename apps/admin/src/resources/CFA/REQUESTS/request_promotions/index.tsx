import { managed_admin } from 'src/resources/helpers';

import { RequestPromotionCreate } from './Create';
import { RequestPromotionEdit } from './Edit';
import { RequestPromotionList } from './List';
import { RequestPromotionShow } from './Show';

export const RequestPromotions = managed_admin({
	create: RequestPromotionCreate,
	edit: RequestPromotionEdit,
	list: RequestPromotionList,
	name: 'request_promotions',
	show: RequestPromotionShow,
});
