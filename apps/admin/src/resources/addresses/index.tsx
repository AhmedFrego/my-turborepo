import LocationCityTwoTone from '@mui/icons-material/LocationCityTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { AddressCreate } from './Create';
import { AddressEdit } from './Edit';
import { AddressList } from './List';
import { AddressShow } from './Show';

export const Addresses = managed_admin({
	create: AddressCreate,
	edit: AddressEdit,
	icon: LocationCityTwoTone,
	list: AddressList,
	name: 'addresses',
	show: AddressShow,
});
