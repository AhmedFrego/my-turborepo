import { Chip, ListItem, ListItemText, Typography } from '@mui/material';
import { sentenceCase } from 'change-case';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatePath, useGetOne, useLocalizedDate } from 'src/hooks';
import { StatusChip } from 'src/resources/CFA/REQUESTS/base_requests/StatusChip';
import { PublicTables, Tables } from 'src/types';

export interface AuditItemProps {
	record: Tables<'status_histories'>;
}

export const AuditItem: React.FC<AuditItemProps> = props => {
	const {
		record: {
			created_at,
			message,
			new_status,
			old_status,
			request_type,
			request_uuid,
			updated_at,
		},
	} = props;
	const date = useLocalizedDate();
	const createPath = useCreatePath();
	const navigate = useNavigate();
	const [createdByName, setCreatedByName] = useState<null | string>(null);

	const { data } = useGetOne('base_requests', { id: String(request_uuid) });
	const { data: userData } = useGetOne('employees', {
		id: String(data?.created_by),
	});

	useEffect(() => {
		if (userData) {
			setCreatedByName(userData.full_name);
		}
	}, [userData]);

	if (!data || !createdByName) return null;

	const { id, type } = data;

	return (
		<ListItem
			alignItems="flex-start"
			onClick={() => {
				navigate(
					createPath({ id, resource: type as PublicTables, type: 'show' }),
				);
			}}
		>
			<ListItemText
				primary={
					<Typography
						color="text.primary"
						component="span"
						sx={{ display: 'inline' }}
						variant="body2"
					>
						<Chip label={createdByName} />
						<Chip label={sentenceCase(request_type)} />
						<StatusChip status={old_status} />
						<StatusChip status={new_status} />
						<Chip label={date(created_at)} />
						{updated_at ? <Chip label={date(updated_at)} /> : null}
					</Typography>
				}
				secondary={data?.title ?? message}
			/>
		</ListItem>
	);
};
