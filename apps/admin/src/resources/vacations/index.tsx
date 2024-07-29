import BeachAccessTwoTone from '@mui/icons-material/BeachAccessTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { VacationCreate } from './Create';
import { VacationEdit } from './Edit';
import { VacationList } from './List';
import { VacationShow } from './Show';

export const Vacations = managed_admin({
	create: VacationCreate,
	edit: VacationEdit,
	icon: BeachAccessTwoTone,
	list: VacationList,
	name: 'vacations',
	show: VacationShow,
});
