import { TextInput } from 'src/components';

import { BaseProposalCreate } from '../base_proposals/Create';

export const ProposalCreate = () => {
	return (
		<BaseProposalCreate>
			<TextInput source="description" />
		</BaseProposalCreate>
	);
};
