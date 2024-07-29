import groupBy from 'lodash/groupBy';
import React, { useMemo } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { DirectionEnum } from 'src/constants';
import { useListContext, useLocale, useTranslate } from 'src/hooks';
import { Tables } from 'src/types';
import { Logger } from 'src/utils';

import { ageCategories, calculateAge, categorizeAge } from '../helpers';

export interface AgeDistributionChartProps {}

export const AgeDistributionChart: React.FC<AgeDistributionChartProps> = () => {
	const translate = useTranslate();
	const { direction } = useLocale();
	const isRtl = direction === DirectionEnum.rtl;

	const { data: employees } = useListContext<Tables<'employees'>>();

	const data = useMemo(() => {
		const ageGroups = employees?.map(({ date_of_birth, gender }) => {
			const age = calculateAge(date_of_birth);

			return { ageGroup: categorizeAge(age), gender };
		});

		return Object.entries(groupBy(ageGroups, 'ageGroup'))
			.map(([key, value]) => {
				return {
					female: value.filter(item => item.gender === 'female').length,
					male: value.filter(item => item.gender === 'male').length,
					name: key,
				};
			})
			.sort(
				(a, b) => ageCategories.indexOf(a.name) - ageCategories.indexOf(b.name),
			);
	}, [employees]);

	return (
		<BarChart
			data={data}
			height={400}
			margin={{ bottom: 20, left: 30, right: 30, top: 20 }}
			style={{ direction }}
			width={400}
			onClick={Logger.log}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis
				dataKey="name"
				reversed={isRtl}
			/>
			<YAxis orientation={isRtl ? 'right' : 'left'} />
			<Legend
				payload={[
					{
						color: 'lightBlue',
						id: 'male',
						value: translate('enum.genders.male'),
					},
					{
						color: 'pink',
						id: 'female',
						value: translate('enum.genders.female'),
					},
				]}
			/>
			<Bar
				dataKey="male"
				fill="lightBlue"
				label={translate('enum.genders.male')}
				stackId="a"
				onClick={(...args) => Logger.log('male', ...args)}
			/>
			<Bar
				dataKey="female"
				fill="pink"
				label={translate('enum.genders.female')}
				stackId="b"
				onClick={(...args) => Logger.log('female', ...args)}
			/>
		</BarChart>
	);
};
