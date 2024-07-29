import { TextField } from 'src/components';

import { filters } from './Filters';
import { BaseProposalList } from '../base_proposals/List';

export const ProposalList = () => {
	return (
		<BaseProposalList filters={filters}>
			<TextField source="description" />
		</BaseProposalList>
	);
};
