import groupBy from 'lodash/groupBy';
import React, { useMemo } from 'react';
import { useListContext } from 'src/hooks';
import { Tables } from 'src/types';

import { GoogleCharts } from './GoogleCharts';
import { ageCategories, calculateAge, categorizeAge } from '../helpers';

export interface GoogleAgeDistributionChartProps {}

export const GoogleAgeDistributionChart: React.FC<
	GoogleAgeDistributionChartProps
> = () => {
	const { data: employees } = useListContext<Tables<'employees'>>();

	const data = useMemo(() => {
		const ageGroups = employees?.map(({ date_of_birth, gender }) => {
			const age = calculateAge(date_of_birth);

			return { ageGroup: categorizeAge(age), gender };
		});

		return [
			['Age Group', 'Male', 'Female'],
			...Object.entries(groupBy(ageGroups, 'ageGroup'))
				.map(([key, value]) => {
					return [
						key,
						value.filter(item => item.gender === 'male').length,
						value.filter(item => item.gender === 'female').length,
					];
				})
				.sort(
					(a, b) =>
						ageCategories.indexOf(a[0].toString()) -
						ageCategories.indexOf(b[0].toString()),
				),
		];
	}, [employees]);

	if (employees?.length === 0) return null;

	return (
		<GoogleCharts
			chartName="GoogleAgeDistributionChart"
			chartType="ColumnChart"
			data={data}
		/>
	);
};
