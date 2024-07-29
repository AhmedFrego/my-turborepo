import React from 'react';
import { InfiniteListBase } from 'src/components';

import { PendingRequestsCard } from './PendingRequestsCard';

export interface PendingRequestsProps {}

export const PendingRequests: React.FC<PendingRequestsProps> = () => {
	return (
		<InfiniteListBase
			filter={{ status: 'submitted' }}
			perPage={1000}
			resource="base_requests"
			storeKey="PendingRequests"
		>
			<PendingRequestsCard />
		</InfiniteListBase>
	);
};
