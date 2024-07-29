import React from 'react';
import { Logger } from 'src/utils';

import { GoogleCharts } from './GoogleCharts';

const data = [
	['Country', 'Popularity'],
	['Germany', 200],
	['United States', 300],
	['Brazil', 400],
	['Canada', 500],
	['France', 600],
	['RU', 700],
];

export interface GoogleCountriesChartProps {}

export const GoogleCountriesChart: React.FC<GoogleCountriesChartProps> = () => {
	return (
		<GoogleCharts
			chartEvents={[
				{
					callback: ({ chartWrapper }) => {
						const chart = chartWrapper.getChart();
						const selection = chart.getSelection();

						if (selection.length === 0) return;

						// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
						const region = data[selection[0].row + 1];

						// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
						Logger.log('Selected : ' + region);
					},
					eventName: 'select',
				},
			]}
			chartName="CountriesChart"
			chartType="GeoChart"
			data={data}
		/>
	);
};
