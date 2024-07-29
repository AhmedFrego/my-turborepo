import { FiltersConfig } from '@react-admin/ra-form-layout';
import { List as RAList } from '@react-admin/ra-rbac';
import { ListProps as RAListProps } from 'react-admin';
import { useNavigate } from 'react-router-dom';
import { ResourceCalenderLink } from 'src/components';
import { useCreatePath, useHotkeys, useResourceDefinition } from 'src/hooks';

import { Bookmark } from './Bookmark';
import { CustomDataGrid, DataGridProps } from './CustomDataGrid';
import { ListActions, ListActionSlots } from './ListActions';
import { Pagination } from './Pagination';

export interface ListProps extends RAListProps {
	dataGrid?: boolean;
	dataGridProps?: DataGridProps;
	slots?: { actions?: ListActionSlots };
	stackedFilters?: FiltersConfig;
}

export const List = (props: React.PropsWithChildren<ListProps>) => {
	const {
		actions,
		children,
		dataGrid = true,
		dataGridProps,
		pagination,
		perPage,
		slots = {},
		// stackedFilters,
		...rest
	} = props;

	const { actions: actionsSlots } = slots;

	const navigate = useNavigate();
	const { hasCreate, name } = useResourceDefinition();
	const createPath = useCreatePath();

	useHotkeys('list.CREATE_NEW', () => {
		if (hasCreate) navigate(createPath({ resource: name, type: 'create' }));
	});

	return (
		<RAList
			actions={
				<ListActions slots={actionsSlots}>
					<ResourceCalenderLink />
					<Bookmark />
					{/* {stackedFilters ? <StackedFilters config={stackedFilters} /> : null} */}
					{actions}
				</ListActions>
			}
			pagination={pagination ?? <Pagination />}
			perPage={perPage ?? 25}
			{...rest}
		>
			{dataGrid ? (
				<CustomDataGrid {...dataGridProps}>{children}</CustomDataGrid>
			) : (
				(children as React.ReactElement)
			)}
		</RAList>
	);
};
