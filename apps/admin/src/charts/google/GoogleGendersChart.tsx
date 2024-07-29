import React from 'react';
import { ChartWrapperOptions } from 'react-google-charts';
import { useListContext, useTranslate } from 'src/hooks';
import { Genders, Tables } from 'src/types';

import { GoogleCharts } from './GoogleCharts';

export interface GoogleGendersChartProps {
	onClick: (gender: string) => void;
}

export const GoogleGendersChart: React.FC<GoogleGendersChartProps> = props => {
	const { onClick } = props;

	const { data: employees } = useListContext<Tables<'employees'>>();
	const translate = useTranslate();

	const data = [
		['Gender', 'Employees'],
		[
			translate(`enum.genders.${Genders.male}`),
			employees?.filter(item => item.gender === Genders.male).length,
		],
		[
			translate(`enum.genders.${Genders.female}`),
			employees?.filter(item => item.gender === Genders.female).length,
		],
	];

	const options: ChartWrapperOptions['options'] = {
		colors: ['lightBlue', 'pink'],
		is3D: true,
	};

	return (
		<GoogleCharts
			chartEvents={[
				{
					callback: ({ chartWrapper }) => {
						const chart = chartWrapper.getChart();
						const [selection] = chart.getSelection();

						if (!selection) return;

						const gender = selection.row === 1 ? Genders.female : Genders.male;

						onClick?.(gender);
					},
					eventName: 'select',
				},
			]}
			chartName="GoogleGendersChart"
			chartType="PieChart"
			data={data}
			options={options}
		/>
	);
};
