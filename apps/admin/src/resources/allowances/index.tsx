import { managed_admin } from 'src/resources/helpers';

import { AllowanceCreate } from './Create';
import { AllowanceEdit } from './Edit';
import { AllowanceList } from './List';
import { AllowanceShow } from './Show';

export const Allowances = managed_admin({
	create: AllowanceCreate,
	edit: AllowanceEdit,
	list: AllowanceList,
	name: 'allowances',
	show: AllowanceShow,
});
