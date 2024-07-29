import { managed_admin } from 'src/resources/helpers';

import { RequestVacationCreate } from './Create';
import { RequestVacationEdit } from './Edit';
import { RequestVacationList } from './List';
import { RequestVacationShow } from './Show';

export const RequestVacations = managed_admin({
	create: RequestVacationCreate,
	edit: RequestVacationEdit,
	list: RequestVacationList,
	name: 'request_vacations',
	show: RequestVacationShow,
});
