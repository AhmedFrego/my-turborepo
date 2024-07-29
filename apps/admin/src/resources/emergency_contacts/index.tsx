import ContactPhoneTwoTone from '@mui/icons-material/ContactPhoneTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { EmergencyContactCreate } from './Create';
import { EmergencyContactEdit } from './Edit';
import { EmergencyContactList } from './List';
import { EmergencyContactShow } from './Show';

export const EmergencyContacts = managed_admin({
	create: EmergencyContactCreate,
	edit: EmergencyContactEdit,
	icon: ContactPhoneTwoTone,
	list: EmergencyContactList,
	name: 'emergency_contacts',
	show: EmergencyContactShow,
});
