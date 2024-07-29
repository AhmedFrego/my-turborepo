import TimeToLeaveTwoTone from '@mui/icons-material/TimeToLeaveTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { DriverLicenseCreate } from './Create';
import { DriverLicenseEdit } from './Edit';
import { DriverLicenseList } from './List';
import { DriverLicenseShow } from './Show';

export const DriverLicenses = managed_admin({
	create: DriverLicenseCreate,
	edit: DriverLicenseEdit,
	icon: TimeToLeaveTwoTone,
	list: DriverLicenseList,
	name: 'driver_licenses',
	show: DriverLicenseShow,
});
