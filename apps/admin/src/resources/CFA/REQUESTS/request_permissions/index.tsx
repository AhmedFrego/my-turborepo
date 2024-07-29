import { managed_admin } from 'src/resources/helpers';

import { RequestPermissionCreate } from './Create';
import { RequestPermissionEdit } from './Edit';
import { RequestPermissionList } from './List';
import { RequestPermissionShow } from './Show';

export const RequestPermissions = managed_admin({
	create: RequestPermissionCreate,
	edit: RequestPermissionEdit,
	list: RequestPermissionList,
	name: 'request_permissions',
	show: RequestPermissionShow,
});
