import Preview from '@mui/icons-material/PreviewTwoTone';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCreatePath, useRecordContext, useResourceContext } from 'src/hooks';
import { useCanAccessFunction } from 'src/utils';

export interface PreviewSurveyIconProps {}

export const PreviewSurveyIcon: React.FC<PreviewSurveyIconProps> = () => {
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
			to={createPath({ id: record.id, resource, type: 'edit' })}
			onClick={event => event.stopPropagation()}
		>
			<Preview />
		</IconButton>
	) : null;
};
