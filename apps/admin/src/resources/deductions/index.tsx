import { managed_admin } from 'src/resources/helpers';

import { DeductionCreate } from './Create';
import { DeductionEdit } from './Edit';
import { DeductionList } from './List';
import { DeductionShow } from './Show';

export const Deductions = managed_admin({
	create: DeductionCreate,
	edit: DeductionEdit,
	list: DeductionList,
	name: 'deductions',
	show: DeductionShow,
});
