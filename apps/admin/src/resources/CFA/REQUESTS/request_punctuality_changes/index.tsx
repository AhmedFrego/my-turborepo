import { managed_admin } from 'src/resources/helpers';

import { RequestPunctualityChangeCreate } from './Create';
import { RequestPunctualityChangeEdit } from './Edit';
import { RequestPunctualityChangeList } from './List';
import { RequestPunctualityChangeShow } from './Show';

export const RequestPunctualityChanges = managed_admin({
	create: RequestPunctualityChangeCreate,
	edit: RequestPunctualityChangeEdit,
	list: RequestPunctualityChangeList,
	name: 'request_punctuality_changes',
	show: RequestPunctualityChangeShow,
});
