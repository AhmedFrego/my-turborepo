import { managed_admin } from 'src/resources/helpers';

import { RequestInternalDelegationCreate } from './Create';
import { RequestInternalDelegationEdit } from './Edit';
import { RequestInternalDelegationList } from './List';
import { RequestInternalDelegationShow } from './Show';

export const RequestInternalDelegations = managed_admin({
	create: RequestInternalDelegationCreate,
	edit: RequestInternalDelegationEdit,
	list: RequestInternalDelegationList,
	name: 'request_internal_delegations',
	show: RequestInternalDelegationShow,
});
