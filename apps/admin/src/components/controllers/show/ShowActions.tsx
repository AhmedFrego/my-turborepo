import React from 'react';
import { ShowActionsProps as RaShowActionsProps } from 'react-admin';
import { EditButton, ShareButton, TopToolbar } from 'src/components';
import { useRecordContext, useResourceDefinition } from 'src/hooks';

export interface ShowActionsProps extends RaShowActionsProps {}

export const ShowActions: React.FC<
	React.PropsWithChildren<ShowActionsProps>
> = props => {
	const { children, className } = props;

	const record = useRecordContext(props);
	const { hasEdit } = useResourceDefinition();

	return (
		<TopToolbar className={className}>
			{children}
			{hasEdit ? <EditButton record={record} /> : null}
			<ShareButton />
		</TopToolbar>
	);
};
