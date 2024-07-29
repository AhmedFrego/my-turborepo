import PolicyTwoTone from '@mui/icons-material/PolicyTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { PolicyCreate } from './Create';
import { PolicyEdit } from './Edit';
import { PolicyList } from './List';
import { PolicyShow } from './Show';

export const Policies = managed_admin({
	create: PolicyCreate,
	edit: PolicyEdit,
	icon: PolicyTwoTone,
	list: PolicyList,
	name: 'policies',
	show: PolicyShow,
});
