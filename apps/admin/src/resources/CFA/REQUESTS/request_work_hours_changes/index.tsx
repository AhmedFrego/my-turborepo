import { managed_admin } from 'src/resources/helpers';

import { RequestWorkHoursChangeCreate } from './Create';
import { RequestWorkHoursChangeEdit } from './Edit';
import { RequestWorkHoursChangeList } from './List';
import { RequestWorkHoursChangeShow } from './Show';

export const RequestWorkHoursChanges = managed_admin({
	create: RequestWorkHoursChangeCreate,
	edit: RequestWorkHoursChangeEdit,
	list: RequestWorkHoursChangeList,
	name: 'request_work_hours_changes',
	show: RequestWorkHoursChangeShow,
});
