import ReportTwoTone from '@mui/icons-material/ReportTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { ComplaintCreate } from './Create';
import { ComplaintEdit } from './Edit';
import { ComplaintList } from './List';
import { ComplaintShow } from './Show';

export const Complaints = managed_admin({
	create: ComplaintCreate,
	edit: ComplaintEdit,
	icon: ReportTwoTone,
	list: ComplaintList,
	name: 'complaints',
	show: ComplaintShow,
});
