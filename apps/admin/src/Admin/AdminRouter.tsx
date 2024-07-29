import { Route } from 'react-router-dom';
import { ResourceCalender } from 'src/components';
import { AdminRoutes } from 'src/constants';
import {
	Configuration,
	FileManager,
	HotKeys,
	MyRequestHistory,
	OrganizationStructure,
	PayrollItems,
} from 'src/pages';
import { AdminServices } from 'src/resources';
import { NonJoinPublicTables } from 'src/types';

import { adminCategorization } from '../resources';
import { resourceCalenderPath } from '../utils';

export const renderRoutes = () => {
	return (
		<>
			{Object.values(AdminServices)
				.filter(item => !item.name.startsWith('join_'))
				.map(item => {
					const { name } = item;

					return (
						<Route
							key={name}
							element={
								<ResourceCalender
									categoryField={
										adminCategorization[name as NonJoinPublicTables] as 'id'
									}
									resource={name as NonJoinPublicTables}
									startField="created_at"
									titleField="id"
								/>
							}
							path={resourceCalenderPath(name)}
						/>
					);
				})}
			<Route
				element={<PayrollItems />}
				path={AdminRoutes.PayrollItems}
			/>
			<Route
				element={<FileManager />}
				path={AdminRoutes.FileManager}
			/>
			<Route
				element={<Configuration />}
				path={AdminRoutes.Configuration}
			/>
			<Route
				element={<OrganizationStructure />}
				path={AdminRoutes.OrganizationStructure}
			/>
			<Route
				element={<MyRequestHistory />}
				path={AdminRoutes.MyRequestHistory}
			/>
			<Route
				element={<HotKeys />}
				path={AdminRoutes.HotKeys}
			/>
		</>
	);
};
