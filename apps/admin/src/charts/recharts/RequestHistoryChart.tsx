import { useTheme } from '@mui/material';
import groupBy from 'lodash/groupBy';
import React from 'react';
import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from 'recharts';
import {
	useGetList,
	useGetRecordRepresentation,
	useTranslate,
} from 'src/hooks';
import { RequestStatuses } from 'src/types';
import { inFilter, statusToColor, stringToColor } from 'src/utils';

export interface RequestHistoryChartProps {}

export const RequestHistoryChart: React.FC<RequestHistoryChartProps> = () => {
	const translate = useTranslate();
	const theme = useTheme();
	const getEmployeeLabel = useGetRecordRepresentation('employees');

	const { data: requests } = useGetList('status_histories', {
		pagination: { page: 1, perPage: 1000 },
	});

	const grouped = groupBy(requests, 'created_by');

	const { data: remoteEmployees } = useGetList(
		'employees',
		{
			filter: inFilter('id', Object.keys(grouped)),
			pagination: { page: 1, perPage: 1000 },
		},
		{ enabled: !!requests?.length },
	);

	if (!requests?.length) return null;

	const employees = Object.entries(grouped).map(([key, value]) => ({
		name:
			getEmployeeLabel(
				remoteEmployees?.find(item => item.id === key),
			)?.toString() ?? '',
		value: value.length,
	}));

	const nested = Object.values(grouped).flatMap(value =>
		Object.entries(groupBy(value, 'new_status')).map(([status, value]) => ({
			fill: theme.palette[statusToColor(status as RequestStatuses)].main,
			name: translate(`enum.request_statuses.${status as RequestStatuses}`),
			value: value.length,
		})),
	);

	return (
		<ResponsiveContainer
			height={400}
			width="100%"
		>
			<PieChart
				height={400}
				width={400}
			>
				<Tooltip />
				<Legend
					align="center"
					height={36}
					layout="horizontal"
					payload={Object.values(RequestStatuses).map(state => ({
						color: theme.palette[statusToColor(state)].main,
						value: translate(`enum.request_statuses.${state}`),
					}))}
				/>
				<Pie
					cx="50%"
					cy="50%"
					data={employees}
					dataKey="value"
					outerRadius={60}
				>
					{employees.map(item => (
						<Cell
							key={item.name.toString()}
							fill={stringToColor(item.name.toString())}
						/>
					))}
				</Pie>
				<Pie
					cx="50%"
					cy="50%"
					data={nested}
					dataKey="value"
					innerRadius={70}
					outerRadius={90}
				/>
			</PieChart>
		</ResponsiveContainer>
	);
};
