import PublicTwoTone from '@mui/icons-material/PublicTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { ResCountryList } from './List';
import { ResCountryShow } from './Show';

export const ResCountries = managed_admin({
	hasCreate: false,
	hasEdit: false,
	icon: PublicTwoTone,
	list: ResCountryList,
	name: 'res_countries',
	show: ResCountryShow,
});
