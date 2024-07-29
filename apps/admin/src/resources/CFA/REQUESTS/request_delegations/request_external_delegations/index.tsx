import { managed_admin } from 'src/resources/helpers';

import { RequestExternalDelegationCreate } from './Create';
import { RequestExternalDelegationEdit } from './Edit';
import { RequestExternalDelegationList } from './List';
import { RequestExternalDelegationShow } from './Show';

export const RequestExternalDelegations = managed_admin({
	create: RequestExternalDelegationCreate,
	edit: RequestExternalDelegationEdit,
	list: RequestExternalDelegationList,
	name: 'request_external_delegations',
	show: RequestExternalDelegationShow,
});
