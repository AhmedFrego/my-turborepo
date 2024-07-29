import groupBy from 'lodash/groupBy';
import React from 'react';
import { useGetList, useTranslate } from 'src/hooks';
import { RequestStatuses } from 'src/types';

import { GoogleCharts } from './GoogleCharts';

export interface GoogleRequestsChartProps {}

export const GoogleRequestsChart: React.FC<GoogleRequestsChartProps> = () => {
	const translate = useTranslate();

	const { data: requests } = useGetList('base_requests', {
		pagination: { page: 1, perPage: 1000 },
	});

	if (!requests?.length) return null;

	const grouped = groupBy(requests, 'status');

	return (
		<GoogleCharts
			chartName="GoogleRequestsChart"
			chartType="PieChart"
			data={[
				['Status', 'Count'],
				...Object.values(RequestStatuses).map(status => [
					translate(`enum.request_statuses.${status}`),
					grouped[status]?.length ?? 0,
				]),
			]}
			options={{ is3D: true }}
		/>
	);
};
