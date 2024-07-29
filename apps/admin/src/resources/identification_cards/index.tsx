import LocalPoliceTwoTone from '@mui/icons-material/LocalPoliceTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { IdentificationCardCreate } from './Create';
import { IdentificationCardEdit } from './Edit';
import { IdentificationCardList } from './List';
import { IdentificationCardShow } from './Show';

export const IdentificationCards = managed_admin({
	create: IdentificationCardCreate,
	edit: IdentificationCardEdit,
	icon: LocalPoliceTwoTone,
	list: IdentificationCardList,
	name: 'identification_cards',
	show: IdentificationCardShow,
});
