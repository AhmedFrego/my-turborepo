import { managed_admin } from 'src/resources/helpers';

import { RequestResignationCreate } from './Create';
import { RequestResignationEdit } from './Edit';
import { RequestResignationList } from './List';
import { RequestResignationShow } from './Show';

export const RequestResignations = managed_admin({
	create: RequestResignationCreate,
	edit: RequestResignationEdit,
	list: RequestResignationList,
	name: 'request_resignations',
	show: RequestResignationShow,
});
