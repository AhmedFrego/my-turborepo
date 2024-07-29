import React from 'react';
import { useGetList } from 'src/hooks';
import { inFilter } from 'src/utils';

import { GoogleCharts } from './GoogleCharts';

export interface GoogleNationalitiesChartProps {}

export const GoogleNationalitiesChart: React.FC<
	GoogleNationalitiesChartProps
> = () => {
	const { data: nationalities } = useGetList('join_employee_nationalities', {
		pagination: { page: 1, perPage: 1000 },
	});

	const { data: countries } = useGetList(
		'res_countries',
		{
			filter: inFilter(
				'id',
				nationalities?.map(item => item.nationality_id),
			),
			pagination: { page: 1, perPage: 1000 },
		},
		{ enabled: !!nationalities?.length },
	);

	if (!countries?.length) return null;

	const data = [
		['Nationality', 'Employees Number'],
		...countries.map(({ id, nationality }) => [
			nationality,
			Number(nationalities?.filter(item => item?.nationality_id === id).length),
		]),
	];

	return (
		<GoogleCharts
			chartName="GoogleNationalitiesChart"
			chartType="PieChart"
			data={data}
			options={{ is3D: true }}
		/>
	);
};
