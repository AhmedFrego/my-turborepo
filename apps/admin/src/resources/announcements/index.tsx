import Announcement from '@mui/icons-material/AnnouncementTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { AnnouncementCreate } from './Create';
import { AnnouncementEdit } from './Edit';
import { AnnouncementList } from './List';
import { AnnouncementShow } from './Show';

export const Announcements = managed_admin({
	create: AnnouncementCreate,
	edit: AnnouncementEdit,
	icon: Announcement,
	list: AnnouncementList,
	name: 'announcements',
	show: AnnouncementShow,
});
