import { cloneElement, useContext, useMemo } from 'react';
import {
	FilterContext,
	ListActionsProps,
	sanitizeListRestProps,
} from 'react-admin';
import {
	CreateButton,
	ExportButton,
	FilterButton,
	TopToolbar,
} from 'src/components';
import {
	useListContext,
	useResourceContext,
	useResourceDefinition,
} from 'src/hooks';
import { PublicTables } from 'src/types';
import { useCanAccessFunction } from 'src/utils';

export interface ListActionSlots {
	create?: React.ReactNode;
	exportSlot?: React.ReactNode;
}

/**
 * Replacement for react-admin's ListAction that adds RBAC control to actions
 *
 * Users must have the 'create' permission on the resource to see the CreateButton.
 * Users must have the 'export' permission on the resource to see the ExportButton.
 *
 * @example
 * import { List } from 'react-admin';
 * import { ListActions } from '@react-admin/ra-rbac';
 *
 * export const PostList = () => (
 *     <List actions={<ListActions />}>
 *         ...
 *     </List>
 * );
 */
export const ListActions = (
	props: {
		resource?: PublicTables;
		slots?: ListActionSlots;
	} & ListActionsProps,
) => {
	const {
		children,
		className,
		exporter,
		filters: filtersProp,
		hasCreate: _,
		slots = {},
		...rest
	} = props;

	const { create, exportSlot } = slots;

	const { displayedFilters, filterValues, showFilter, total } =
		useListContext(props);
	const resource = useResourceContext(props);
	const { hasCreate } = useResourceDefinition(props);
	const filters = useContext(FilterContext) ?? filtersProp;
	const { canAccess, isLoading } = useCanAccessFunction();

	return useMemo(
		() =>
			isLoading ? null : (
				<TopToolbar
					className={className}
					{...sanitizeListRestProps(rest)}
				>
					{filtersProp
						? cloneElement(filtersProp, {
								context: 'button',
								displayedFilters,
								filterValues,
								resource,
								showFilter,
							})
						: filters && <FilterButton />}
					{children}
					{hasCreate &&
						canAccess({
							action: 'create',
							resource,
						}) &&
						(create ?? <CreateButton />)}
					{exporter !== false &&
						canAccess({
							action: 'export',
							resource,
						}) &&
						(exportSlot ?? <ExportButton />)}
				</TopToolbar>
			),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[resource, displayedFilters, filterValues, filters, total, isLoading],
	);
};
