import { Stack } from '@mui/material';
import { pascalCase } from 'change-case';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRecordContext, useResourceContext } from 'src/hooks';
import {
	PublicTables,
	RequestPublicTables,
	RequestStatuses,
	Tables,
} from 'src/types';
import { useCanAccessFunction } from 'src/utils';
import { PascalCase } from 'type-fest';

import { UpdateRequestHandlers, UpdateStatus } from './UpdateStatus';
import {
	GetAvailableStatuses,
	getAvailableStatuses,
} from './getAvailableStatuses';

export interface RequestActionsProps<T extends PublicTables = PublicTables>
	extends Partial<UpdateRequestHandlers<T>> {
	getRequestStatuses?: GetAvailableStatuses;
	slots?: Partial<Record<RequestStatuses, React.FC>>;
}

export const RequestActions = <
	T extends RequestPublicTables = RequestPublicTables,
>(
	props: RequestActionsProps<T>,
) => {
	const { getRequestStatuses = getAvailableStatuses, slots } = props;
	const resource = useResourceContext();
	const { canAccess } = useCanAccessFunction();

	const record = useRecordContext<Tables<'base_requests'>>();
	const methods = useForm({ defaultValues: record });

	if (!record) return null;

	const availableStatuses = getRequestStatuses(
		record.status as RequestStatuses,
	);

	return (
		<FormProvider {...methods}>
			<Stack
				direction="row"
				justifyContent="flex-end"
				spacing={1}
				sx={{ width: '100%' }}
			>
				{availableStatuses.map(item => {
					const Slot = slots?.[item];

					return canAccess({
						action: item,
						resource,
					}) ? (
						<UpdateStatus<T>
							key={item}
							new_status_input={item}
							onUpdate={
								props[`on${pascalCase(item) as PascalCase<typeof item>}`]
							}
						>
							{Slot ? <Slot /> : null}
						</UpdateStatus>
					) : null;
				})}
			</Stack>
		</FormProvider>
	);
};
