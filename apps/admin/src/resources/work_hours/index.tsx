import WatchLaterTwoTone from '@mui/icons-material/WatchLaterTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { WorkHourCreate } from './Create';
import { WorkHourEdit } from './Edit';
import { WorkHourList } from './List';
import { WorkHourShow } from './Show';

export const WorkHours = managed_admin({
	create: WorkHourCreate,
	edit: WorkHourEdit,
	icon: WatchLaterTwoTone,
	list: WorkHourList,
	name: 'work_hours',
	show: WorkHourShow,
});
