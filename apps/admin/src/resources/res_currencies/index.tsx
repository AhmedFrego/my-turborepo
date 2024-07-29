import PublicTwoTone from '@mui/icons-material/PublicTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { ResCurrencyList } from './List';
import { ResCurrencyShow } from './Show';

export const ResCurrencies = managed_admin({
	hasCreate: false,
	hasEdit: false,
	icon: PublicTwoTone,
	list: ResCurrencyList,
	name: 'res_currencies',
	show: ResCurrencyShow,
});
