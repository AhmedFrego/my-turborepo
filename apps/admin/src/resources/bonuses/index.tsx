import { managed_admin } from 'src/resources/helpers';

import { BonusCreate } from './Create';
import { BonusEdit } from './Edit';
import { BonusList } from './List';
import { BonusShow } from './Show';

export const Bonuses = managed_admin({
	create: BonusCreate,
	edit: BonusEdit,
	list: BonusList,
	name: 'bonuses',
	show: BonusShow,
});
