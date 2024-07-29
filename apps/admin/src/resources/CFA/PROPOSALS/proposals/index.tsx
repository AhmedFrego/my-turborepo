import SettingsSuggestTwoTone from '@mui/icons-material/SettingsSuggestTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { ProposalCreate } from './Create';
import { ProposalEdit } from './Edit';
import { ProposalList } from './List';
import { ProposalShow } from './Show';

export const Proposals = managed_admin({
	create: ProposalCreate,
	edit: ProposalEdit,
	icon: SettingsSuggestTwoTone,
	list: ProposalList,
	name: 'proposals',
	show: ProposalShow,
});
