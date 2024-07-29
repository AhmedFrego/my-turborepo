import { DatesSetArg } from '@fullcalendar/core';
import { Box, Typography } from '@mui/material';
import { subYears } from 'date-fns';
import { ResourceYearly } from 'src/charts';
import { InfiniteListBase } from 'src/components';
import { useTranslate } from 'src/hooks';
import { FilterPayload, NonJoinPublicTables, Tables } from 'src/types';

import { InfinitePagination } from '../InfinitePagination';

const customGetFilterValues =
	(startField: string) =>
	({
		end = new Date('2023-10-31'),
		start = new Date('2023-10-01'),
	}: DatesSetArg) => ({
		[`${startField}@gte`]: start,
		[`${startField}@lte`]: end,
	});

export interface ResourceCalenderProps<
	T extends NonJoinPublicTables = NonJoinPublicTables,
	F extends keyof Tables<T> = keyof Tables<T>,
> {
	categoryField?: F;
	endField?: F;
	filter?: FilterPayload;
	resource: T;
	startField: F;
	titleField: F;
}

export const ResourceCalender = <
	T extends NonJoinPublicTables = NonJoinPublicTables,
	F extends keyof Tables<T> = keyof Tables<T>,
>(
	props: ResourceCalenderProps<T, F>,
) => {
	const {
		categoryField,
		endField,
		filter,
		resource,
		startField,
		titleField,
		...rest
	} = props;
	const translate = useTranslate();

	return (
		<InfiniteListBase
			filter={{
				...filter,
				...customGetFilterValues(String(startField)),
				'created_at@gte': subYears(new Date(), 2).toISOString(),
			}}
			perPage={1000}
			resource={resource}
			sort={{
				field: 'created_at',
				order: 'DESC',
			}}
			storeKey={resource + 'ResourceCalender'}
		>
			<Box
				height="80vh"
				width="100%"
			>
				<Typography
					component="h1"
					variant="h3"
				>
					{translate(`resources.${resource}.name`, { smart_count: 2 })}{' '}
					{translate(`calender.calender`)}
				</Typography>
				<ResourceYearly
					categoryField={categoryField as 'id'}
					endField={endField as 'id'}
					filter={filter}
					resource={resource}
					startField={startField as 'id'}
					titleField={titleField as 'id'}
					{...rest}
				/>
			</Box>
			{/* <LocalCalender
				convertToEvent={event => {
					const { id } = event as Tables<T>;

					const category =
						categoryField && (get(event, categoryField) as string);

					return {
						id,
						title: getLabel(event)?.toString() as string,
						start: get(event, startField) as string,
						...(endField && { end: get(event, endField) as string }),
						backgroundColor: category && stringToColor(category),
						borderColor: category && stringToColor(category),
					};
				}}
				getFilterValueFromInterval={customGetFilterValues(String(startField))}
				transform={props => {
					const { end, id, start, title } = props as EventInput;

					return {
						id,
						...(startField && { [startField]: start }),
						...(endField && { [endField]: end }),
						...(titleField && { [titleField]: title }),
					};
				}}
			/> */}
			<InfinitePagination />
		</InfiniteListBase>
	);
};
