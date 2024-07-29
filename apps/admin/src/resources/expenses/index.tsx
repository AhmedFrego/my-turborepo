import { managed_admin } from 'src/resources/helpers';

import { ExpenseCreate } from './Create';
import { ExpenseEdit } from './Edit';
import { ExpenseList } from './List';
import { ExpenseShow } from './Show';

export const Expenses = managed_admin({
	create: ExpenseCreate,
	edit: ExpenseEdit,
	list: ExpenseList,
	name: 'expenses',
	show: ExpenseShow,
});
