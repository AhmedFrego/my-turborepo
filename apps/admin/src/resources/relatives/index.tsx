import Diversity3TwoTone from '@mui/icons-material/Diversity3TwoTone';
import { managed_admin } from 'src/resources/helpers';

import { RelativeCreate } from './Create';
import { RelativeEdit } from './Edit';
import { RelativeList } from './List';
import { RelativeShow } from './Show';

export const Relatives = managed_admin({
	create: RelativeCreate,
	edit: RelativeEdit,
	icon: Diversity3TwoTone,
	list: RelativeList,
	name: 'relatives',
	show: RelativeShow,
});
