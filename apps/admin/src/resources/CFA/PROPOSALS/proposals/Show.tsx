import { TextField } from 'src/components';

import { BaseProposalShow } from '../base_proposals/Show';

export const ProposalShow = () => {
	return (
		<BaseProposalShow>
			<TextField source="description" />
		</BaseProposalShow>
	);
};
