import { managed_admin } from 'src/resources/helpers';

import { ContactInformationCreate } from './Create';
import { ContactInformationEdit } from './Edit';
import { ContactInformationList } from './List';
import { ContactInformationShow } from './Show';

export const ContactInformation = managed_admin({
	create: ContactInformationCreate,
	edit: ContactInformationEdit,
	list: ContactInformationList,
	name: 'contact_information',
	show: ContactInformationShow,
});
