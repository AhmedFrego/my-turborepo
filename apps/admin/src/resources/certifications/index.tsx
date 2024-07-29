import CardMembershipTwoTone from '@mui/icons-material/CardMembershipTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { CertificationCreate } from './Create';
import { CertificationEdit } from './Edit';
import { CertificationList } from './List';
import { CertificationShow } from './Show';

export const Certifications = managed_admin({
	create: CertificationCreate,
	edit: CertificationEdit,
	icon: CardMembershipTwoTone,
	list: CertificationList,
	name: 'certifications',
	show: CertificationShow,
});
