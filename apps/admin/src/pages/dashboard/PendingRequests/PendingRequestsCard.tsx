import Pending from '@mui/icons-material/PendingTwoTone';
import queryString from 'query-string';
import React from 'react';
import { CardWithIcon } from 'src/components';
import { useCreatePath, useListContext } from 'src/hooks';
import { Tables } from 'src/types';

export interface CardProps {}

export const PendingRequestsCard: React.FC<CardProps> = () => {
	const { total } = useListContext<Tables<'base_requests'>>();
	const createPath = useCreatePath();

	return (
		<CardWithIcon
			color="success"
			icon={<Pending fontSize="large" />}
			subtitle={total}
			title="custom.dashboard_cards.pending_requests"
			to={{
				pathname: createPath({ resource: 'base_requests' }),
				search: queryString.stringify({
					filter: JSON.stringify({ status: 'submitted' }),
				}),
			}}
		/>
	);
};
