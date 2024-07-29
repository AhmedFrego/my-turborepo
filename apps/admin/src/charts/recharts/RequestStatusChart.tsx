import { useTheme } from '@mui/material';
import groupBy from 'lodash/groupBy';
import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { useGetList, useTranslate } from 'src/hooks';
import { RequestStatuses } from 'src/types';
import { statusToColor } from 'src/utils';

export interface RequestStatusChartProps {
	onClick?: (gender: { id: string }) => void;
}

export const RequestStatusChart: React.FC<RequestStatusChartProps> = props => {
	const { onClick } = props;

	const { data: requests } = useGetList('base_requests', {
		pagination: { page: 1, perPage: 1000 },
	});

	const translate = useTranslate();
	const theme = useTheme();

	if (!requests?.length) return null;

	const grouped = groupBy(requests, 'status');

	const data = [
		RequestStatuses.approved,
		RequestStatuses.rejected,
		RequestStatuses.in_review,
	].map(status => ({
		fill: theme.palette[statusToColor(status)].main,
		id: status,
		name: translate(`enum.request_statuses.${status}`),
		value: grouped[status]?.length ?? 0,
	}));

	return (
		<PieChart
			height={400}
			width={400}
		>
			<Pie
				cx="50%"
				cy="50%"
				data={data}
				dataKey="value"
				fill="#82ca9d"
				innerRadius={30}
				outerRadius={70}
				valueKey="name"
				onClick={(payload: { id: string }) => {
					onClick?.(payload);
				}}
			/>
			<Tooltip />
			<Legend />
		</PieChart>
	);
};
