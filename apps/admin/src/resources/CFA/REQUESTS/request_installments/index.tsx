import { managed_admin } from 'src/resources/helpers';

import { RequestInstallmentCreate } from './Create';
import { RequestInstallmentEdit } from './Edit';
import { RequestInstallmentList } from './List';
import { RequestInstallmentShow } from './Show';

export const RequestInstallments = managed_admin({
	create: RequestInstallmentCreate,
	edit: RequestInstallmentEdit,
	list: RequestInstallmentList,
	name: 'request_installments',
	show: RequestInstallmentShow,
});
