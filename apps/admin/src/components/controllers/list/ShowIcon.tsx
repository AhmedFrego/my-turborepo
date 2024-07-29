import Visibility from '@mui/icons-material/VisibilityTwoTone';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCreatePath, useRecordContext, useResourceContext } from 'src/hooks';
import { useCanAccessFunction } from 'src/utils';

export interface ShowIconProps {}

export const ShowIcon: React.FC<ShowIconProps> = () => {
	const resource = useResourceContext();
	const record = useRecordContext();
	const createPath = useCreatePath();
	const { canAccess, isLoading } = useCanAccessFunction();

	if (isLoading) {
		return null;
	}

	if (!record) return null;

	return canAccess({
		action: 'show',
		record,
		resource,
	}) ? (
		<IconButton
			color="primary"
			component={Link}
			to={{
				pathname: createPath({
					id: record.id,
					resource,
					type: 'show',
				}),
			}}
			onClick={event => event.stopPropagation()}
		>
			<Visibility />
		</IconButton>
	) : null;
};
