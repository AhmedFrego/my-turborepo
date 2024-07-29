import CategoryTwoTone from '@mui/icons-material/CategoryTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { DepartmentCreate } from './Create';
import { DepartmentEdit } from './Edit';
import { DepartmentList } from './List';
import { DepartmentShow } from './Show';

export const Departments = managed_admin({
	create: DepartmentCreate,
	edit: DepartmentEdit,
	icon: CategoryTwoTone,
	list: DepartmentList,
	name: 'departments',
	show: DepartmentShow,
});
