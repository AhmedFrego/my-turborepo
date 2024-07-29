import AssignmentTwoTone from '@mui/icons-material/AssignmentTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { ContractCreate } from './Create';
import { ContractEdit } from './Edit';
import { ContractList } from './List';
import { ContractShow } from './Show';

export const Contracts = managed_admin({
	create: ContractCreate,
	edit: ContractEdit,
	icon: AssignmentTwoTone,
	list: ContractList,
	name: 'contracts',
	show: ContractShow,
});
