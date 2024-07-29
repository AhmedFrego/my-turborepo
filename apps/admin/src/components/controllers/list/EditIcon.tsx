import Edit from '@mui/icons-material/EditTwoTone';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCreatePath, useRecordContext, useResourceContext } from 'src/hooks';
import { useCanAccessFunction } from 'src/utils';

export interface EditIconProps {}

export const EditIcon: React.FC<EditIconProps> = () => {
	const resource = useResourceContext();
	const record = useRecordContext();
	const createPath = useCreatePath();
	const { canAccess, isLoading } = useCanAccessFunction();

	if (isLoading) {
		return null;
	}

	if (!record) return null;

	return canAccess({
		action: 'edit',
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
					type: 'edit',
				}),
			}}
			onClick={event => event.stopPropagation()}
		>
			<Edit />
		</IconButton>
	) : null;
};
