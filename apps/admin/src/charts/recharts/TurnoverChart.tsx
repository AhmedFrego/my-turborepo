import { getMonth } from 'date-fns';
import React from 'react';
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { DirectionEnum } from 'src/constants';
import { useListContext, useLocale, useTranslate } from 'src/hooks';
import { Tables } from 'src/types';

import { getMonthName } from '../helpers';

export interface TurnoverChartProps {}

export const TurnoverChart: React.FC<TurnoverChartProps> = () => {
	const { data: employees } = useListContext<Tables<'employees'>>();
	const { code, direction } = useLocale();
	const translate = useTranslate();

	const isRtl = direction === DirectionEnum.rtl;

	if (!employees?.length) return null;

	const data = Array.from({ length: 12 }).map((_, index) => {
		const month = index + 1;

		return {
			date_of_hiring: employees.filter(
				({ date_of_hiring }) =>
					date_of_hiring && getMonth(new Date(date_of_hiring)) === index,
			).length,
			date_of_termination: employees.filter(
				({ date_of_termination }) =>
					date_of_termination &&
					getMonth(new Date(date_of_termination)) === index,
			).length,
			name: getMonthName(month, code),
		};
	});

	return (
		<ResponsiveContainer height={400}>
			<LineChart
				data={data}
				margin={{ bottom: 20, left: 30, right: 30, top: 5 }}
				style={{ direction }}
			>
				<XAxis
					dataKey="name"
					reversed={isRtl}
				/>
				<YAxis orientation={isRtl ? 'right' : 'left'} />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Legend
					height={36}
					verticalAlign="top"
				/>
				<Line
					dataKey="date_of_hiring"
					name={translate('resources.employees.fields.date_of_hiring')}
					stroke="#8884d8"
					type="monotone"
				/>
				<Line
					dataKey="date_of_termination"
					name={translate('resources.employees.fields.date_of_termination')}
					stroke="#82ca9d"
					type="monotone"
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};
