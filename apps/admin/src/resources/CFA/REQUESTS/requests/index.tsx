import PlaylistAddCheckCircleTwoTone from '@mui/icons-material/PlaylistAddCheckCircleTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { RequestCreate } from './Create';
import { RequestEdit } from './Edit';
import { RequestList } from './List';
import { RequestShow } from './Show';

export const Requests = managed_admin({
	create: RequestCreate,
	edit: RequestEdit,
	icon: PlaylistAddCheckCircleTwoTone,
	list: RequestList,
	name: 'requests',
	show: RequestShow,
});
