import { lazy } from '@loadable/component';
import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import { Route } from 'react-router-dom';
import { managed_admin } from 'src/resources/helpers';

import { EmployeeVacations } from './EmployeeVacations';

const EmployeeCreate = lazy(() =>
	import('./Create').then(({ EmployeeCreate }) => EmployeeCreate),
);

const EmployeeEdit = lazy(() =>
	import('./Edit').then(({ EmployeeEdit }) => EmployeeEdit),
);

const EmployeeList = lazy(() =>
	import('./List').then(({ EmployeeList }) => EmployeeList),
);

const EmployeeShow = lazy(() =>
	import('./Show').then(({ EmployeeShow }) => EmployeeShow),
);

export const Employees = managed_admin({
	children: (
		<Route
			element={<EmployeeVacations />}
			path=":id/vacations"
		/>
	),
	create: <EmployeeCreate />,
	edit: <EmployeeEdit />,
	icon: AccountCircleTwoTone,
	list: <EmployeeList />,
	name: 'employees',
	show: <EmployeeShow />,
});
