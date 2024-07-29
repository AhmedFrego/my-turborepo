import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import { useListContext, useTranslate } from 'src/hooks';
import { Genders, Tables } from 'src/types';

export interface GendersChartProps {
	onClick: (gender: { id: string }) => void;
}

export const GendersChart: React.FC<GendersChartProps> = props => {
	const { onClick } = props;

	const { data: employees } = useListContext<Tables<'employees'>>();
	const translate = useTranslate();

	const data = [
		{
			fill: 'lightBlue',
			id: Genders.male,
			name: translate(`enum.genders.${Genders.male}`),
			value: employees?.filter(item => item.gender === Genders.male).length,
		},
		{
			fill: 'pink',
			id: Genders.female,
			name: translate(`enum.genders.${Genders.female}`),
			value: employees?.filter(item => item.gender === Genders.female).length,
		},
	];

	return (
		<PieChart
			height={200}
			width={400}
		>
			<Pie
				label
				data={data}
				dataKey="value"
				innerRadius={30}
				outerRadius={70}
				onClick={(payload: { id: string }) => {
					onClick?.(payload);
				}}
			/>

			<Tooltip payload={data} />
		</PieChart>
	);
};
