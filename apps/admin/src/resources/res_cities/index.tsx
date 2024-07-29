import FlagTwoTone from '@mui/icons-material/FlagTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { ResCityList } from './List';
import { ResCityShow } from './Show';

export const ResCities = managed_admin({
	hasCreate: false,
	hasEdit: false,
	icon: FlagTwoTone,
	list: ResCityList,
	name: 'res_cities',
	show: ResCityShow,
});
