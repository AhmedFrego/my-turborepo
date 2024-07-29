import AddHomeWorkTwoTone from '@mui/icons-material/AddHomeWorkTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { ResidencyCreate } from './Create';
import { ResidencyEdit } from './Edit';
import { ResidencyList } from './List';
import { ResidencyShow } from './Show';

export const Residencies = managed_admin({
	create: ResidencyCreate,
	edit: ResidencyEdit,
	icon: AddHomeWorkTwoTone,
	list: ResidencyList,
	name: 'residencies',
	show: ResidencyShow,
});
