import { managed_admin } from 'src/resources/helpers';

import { RequestExpenseCreate } from './Create';
import { RequestExpenseEdit } from './Edit';
import { RequestExpenseList } from './List';
import { RequestExpenseShow } from './Show';

export const RequestExpenses = managed_admin({
	create: RequestExpenseCreate,
	edit: RequestExpenseEdit,
	list: RequestExpenseList,
	name: 'request_expenses',
	show: RequestExpenseShow,
});
