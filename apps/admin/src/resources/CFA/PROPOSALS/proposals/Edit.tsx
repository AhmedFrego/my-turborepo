import { TextInput } from 'src/components';

import { BaseProposalEdit } from '../base_proposals/Edit';

export const ProposalEdit = () => {
	return (
		<BaseProposalEdit>
			<TextInput source="description" />
		</BaseProposalEdit>
	);
};
