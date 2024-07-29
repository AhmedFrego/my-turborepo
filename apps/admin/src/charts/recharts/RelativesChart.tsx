import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { useGetList, useListContext, useLocale } from 'src/hooks';
import { Tables } from 'src/types';
import { getTypeOptionText, stringToColor } from 'src/utils';

export interface RelativesChartProps {}

export const RelativesChart: React.FC<RelativesChartProps> = () => {
	const { data: relatives } = useListContext<Tables<'relatives'>>();

	const [, setSearchParams] = useSearchParams();
	const { locale } = useLocale();

	const options = {
		filter: { category: 'relations' },
		pagination: { page: 1, perPage: 1000 },
	};

	const { data: typesList = [] } = useGetList('types', options);

	const data = typesList.map(item => {
		const { id } = item;
		const localizedName = getTypeOptionText(item, locale);

		return {
			fill: stringToColor(localizedName),
			id,
			name: localizedName,
			value:
				relatives?.filter(relative => relative.relation_types_id === id)
					.length ?? 0,
		};
	});

	return (
		<PieChart
			height={200}
			width={400}
		>
			<Pie
				data={data}
				dataKey="value"
				innerRadius={30}
				outerRadius={70}
				onClick={(payload: { id: string }) => {
					setSearchParams({ filter: JSON.stringify({ bank_id: payload.id }) });
				}}
			/>
			<Tooltip payload={data} />
			<Legend
				height={36}
				payload={typesList.map(item => {
					const localizedName = getTypeOptionText(item, locale);

					return {
						color: stringToColor(localizedName),
						id: String(item.id),
						value: localizedName,
					};
				})}
				verticalAlign="top"
			/>
		</PieChart>
	);
};
