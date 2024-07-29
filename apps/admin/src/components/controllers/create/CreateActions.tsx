import React from 'react';
import { CreateActionsProps as RaCreateActionsProps } from 'react-admin';
import { ListButton, TopToolbar } from 'src/components';
import { useResourceDefinition } from 'src/hooks';
import { PublicTables } from 'src/types';

export interface CreateActionsProps extends RaCreateActionsProps {
	resource?: PublicTables;
}

export const CreateActions: React.FC<
	React.PropsWithChildren<CreateActionsProps>
> = props => {
	const { children, ...rest } = props;
	const { hasList } = useResourceDefinition(rest);

	return (
		<TopToolbar>
			{children}
			{hasList && <ListButton />}
		</TopToolbar>
	);
};
