import Link from '@mui/icons-material/LinkTwoTone';
import { Button as MuiButton } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Count } from 'src/components';
import { useCreatePath, useResourceDefinition, useTranslate } from 'src/hooks';

export interface EntityVacationsLinkProps {}

export const EntityVacationsLink: React.FC<EntityVacationsLinkProps> = () => {
	const translate = useTranslate();
	const navigate = useNavigate();
	const createPath = useCreatePath();
	const { name } = useResourceDefinition();
	const { id } = useParams();

	if (!id) return null;

	return (
		<MuiButton
			startIcon={<Link />}
			onClick={() =>
				navigate(
					createPath({ id, resource: name, sup: 'vacations', type: 'edit' }),
				)
			}
		>
			{translate('resources.vacations.name', { smart_count: 2 })} (
			<Count
				filter={{ owner_id: id }}
				resource="vacations"
			/>
			)
		</MuiButton>
	);
};
