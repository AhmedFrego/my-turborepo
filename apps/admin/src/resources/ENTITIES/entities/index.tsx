import CorporateFareTwoTone from '@mui/icons-material/CorporateFareTwoTone';
import { Route } from 'react-router-dom';
import { managed_admin } from 'src/resources/helpers';

import { EntityCreate } from './Create';
import { EntityEdit } from './Edit';
import { EntityVacations } from './EntityVacations';
import { EntityList } from './List';
import { EntityShow } from './Show';

export const Entities = managed_admin({
	children: (
		<Route
			element={<EntityVacations />}
			path=":id/vacations"
		/>
	),
	create: EntityCreate,
	edit: EntityEdit,
	icon: CorporateFareTwoTone,
	list: EntityList,
	name: 'entities',
	recordRepresentation: record => {
		const { name } = record;

		return name.toLocaleUpperCase();
	},
	show: EntityShow,
});
