import { differenceInQuarters } from 'date-fns';
import groupBy from 'lodash/groupBy';
import React from 'react';
import { useListContext } from 'src/hooks';
import { Tables } from 'src/types';

import { GoogleCharts } from './GoogleCharts';

export interface GoogleTurnoverPerMonthChartProps {}

export const GoogleTurnoverPerMonthChart: React.FC<
	GoogleTurnoverPerMonthChartProps
> = () => {
	const { data: employees } = useListContext<Tables<'employees'>>();

	if (!employees?.length) return null;

	const data = employees
		.map(item => {
			const { date_of_hiring, date_of_termination } = item;

			if (date_of_hiring && date_of_termination) {
				const hiring = new Date(date_of_hiring);
				const termination = new Date(date_of_termination);

				return differenceInQuarters(hiring, termination);
			}
		})
		.filter(Boolean);

	return (
		<GoogleCharts
			chartName="TurnoverPerMonthChart"
			chartType="LineChart"
			data={[
				[
					{ label: 'Element', type: 'string' },
					{ label: 'Density', type: 'number' },
				],
				...Object.entries(groupBy(data)).map(([key, value]) => [
					String(Number(key) * 3) + ' Month',
					value.length,
				]),
			]}
		/>
	);
};
