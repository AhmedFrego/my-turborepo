import Hive from '@mui/icons-material/HiveTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { TypeCreate } from './Create';
import { TypeEdit } from './Edit';
import { TypeList } from './List';
import { TypeShow } from './Show';

export const Types = managed_admin({
	create: TypeCreate,
	edit: TypeEdit,
	icon: Hive,
	list: TypeList,
	name: 'types',
	show: TypeShow,
});
