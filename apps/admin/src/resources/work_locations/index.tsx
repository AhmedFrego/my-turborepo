import PinDropTwoTone from '@mui/icons-material/PinDropTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { WorkLocationCreate } from './Create';
import { WorkLocationEdit } from './Edit';
import { WorkLocationList } from './List';
import { WorkLocationShow } from './Show';

export const WorkLocations = managed_admin({
	create: WorkLocationCreate,
	edit: WorkLocationEdit,
	icon: PinDropTwoTone,
	list: WorkLocationList,
	name: 'work_locations',
	show: WorkLocationShow,
});
