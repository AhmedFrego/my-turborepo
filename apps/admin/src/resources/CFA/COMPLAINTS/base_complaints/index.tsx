import { managed_admin } from 'src/resources/helpers';

import { BaseComplaintCreate } from './Create';
import { BaseComplaintEdit } from './Edit';
import { BaseComplaintList } from './List';
import { BaseComplaintShow } from './Show';

export const BaseComplaints = managed_admin({
	create: BaseComplaintCreate,
	edit: BaseComplaintEdit,
	list: BaseComplaintList,
	name: 'base_complaints',
	show: BaseComplaintShow,
});
