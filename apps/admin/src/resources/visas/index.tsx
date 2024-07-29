import VpnKeyOffTwoTone from '@mui/icons-material/VpnKeyOffTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { VisaCreate } from './Create';
import { VisaEdit } from './Edit';
import { VisaList } from './List';
import { VisaShow } from './Show';

export const Visas = managed_admin({
	create: VisaCreate,
	edit: VisaEdit,
	icon: VpnKeyOffTwoTone,
	list: VisaList,
	name: 'visas',
	show: VisaShow,
});
