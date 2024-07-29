import AirplanemodeActiveTwoTone from '@mui/icons-material/AirplanemodeActiveTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { PassportCreate } from './Create';
import { PassportEdit } from './Edit';
import { PassportList } from './List';
import { PassportShow } from './Show';

export const Passports = managed_admin({
	create: PassportCreate,
	edit: PassportEdit,
	icon: AirplanemodeActiveTwoTone,
	list: PassportList,
	name: 'passports',
	show: PassportShow,
});
