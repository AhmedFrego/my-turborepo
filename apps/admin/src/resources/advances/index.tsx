import { managed_admin } from 'src/resources/helpers';

import { AdvanceCreate } from './Create';
import { AdvanceEdit } from './Edit';
import { AdvanceList } from './List';
import { AdvanceShow } from './Show';

export const Advances = managed_admin({
	create: AdvanceCreate,
	edit: AdvanceEdit,
	list: AdvanceList,
	name: 'advances',
	show: AdvanceShow,
});
