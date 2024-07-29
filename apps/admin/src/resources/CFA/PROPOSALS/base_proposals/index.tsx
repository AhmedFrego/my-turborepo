import { managed_admin } from 'src/resources/helpers';

import { BaseProposalCreate } from './Create';
import { BaseProposalEdit } from './Edit';
import { BaseProposalList } from './List';
import { BaseProposalShow } from './Show';

export const BaseProposals = managed_admin({
	create: BaseProposalCreate,
	edit: BaseProposalEdit,
	list: BaseProposalList,
	name: 'base_proposals',
	show: BaseProposalShow,
});
