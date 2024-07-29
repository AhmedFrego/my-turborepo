import { managed_admin } from 'src/resources/helpers';

import { RequestDelegationCreate } from './Create';
import { RequestDelegationEdit } from './Edit';
import { RequestDelegationList } from './List';
import { RequestDelegationShow } from './Show';

export const RequestDelegations = managed_admin({
	create: RequestDelegationCreate,
	edit: RequestDelegationEdit,
	list: RequestDelegationList,
	name: 'request_delegations',
	show: RequestDelegationShow,
});
