import SensorOccupiedTwoTone from '@mui/icons-material/SensorOccupiedTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { JobTitleCreate } from './Create';
import { JobTitleEdit } from './Edit';
import { JobTitleList } from './List';
import { JobTitleShow } from './Show';

export const JobTitles = managed_admin({
	create: JobTitleCreate,
	edit: JobTitleEdit,
	icon: SensorOccupiedTwoTone,
	list: JobTitleList,
	name: 'job_titles',
	show: JobTitleShow,
});
