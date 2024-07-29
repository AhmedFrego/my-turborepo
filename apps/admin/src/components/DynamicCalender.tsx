import { DatesSetArg } from '@fullcalendar/core';
import get from 'lodash/get';
import { InfiniteListBase } from 'src/components';
import { FilterPayload, NonJoinPublicTables, Tables } from 'src/types';
import { stringToColor } from 'src/utils';

import { LocalCalender, LocalCalenderProps } from './LocalCalender';

/**
 * Generates default filter values for a calendar component based on the specified start field.
 *
 * This function is used to create a filter payload that contains the start and end dates for a given calendar view.
 * It's typically used to filter calendar events within a specific date range.
 *
 * @param startField - A string representing the field in the data source that corresponds to the start date of the event.
 *                     This field is used to construct the filter payload.
 *
 * @returns A function that takes a `DatesSetArg` object (from FullCalendar) and returns a `FilterPayload`.
 *          The `DatesSetArg` object contains 'start' and 'end' properties, representing the visible date range of the calendar.
 *          The returned `FilterPayload` will have two properties, formed by appending '@gte' (greater than or equal) and
 *          '@lte' (less than or equal) to the `startField`, with values set to the 'start' and 'end' date respectively.
 *          This payload can then be used to filter calendar events within the specified date range.
 *
 * @example
 * ```
 * const filterValues = customGetFilterValues('eventStartDate');
 * const filterPayload = filterValues({ start: new Date('2023-01-01'), end: new Date('2023-01-31') });
 * // filterPayload would be something like: { 'eventStartDate@gte': '2023-01-01', 'eventStartDate@lte': '2023-01-31' }
 * ```
 */
const customGetFilterValues =
	(startField: string) =>
	(config: DatesSetArg): FilterPayload => {
		const { end = new Date('2023-10-31'), start = new Date('2023-10-01') } =
			config;

		return {
			[`${startField}@gte`]: start,
			[`${startField}@lte`]: end,
		};
	};

/**
 * Props for the DynamicCalender component.
 * @template T - Type for the resource table.
 * @template F - Type for the field in the resource table.
 */
export interface DynamicCalenderProps<
	T extends NonJoinPublicTables = NonJoinPublicTables,
	F extends keyof Tables<T> = keyof Tables<T>,
> extends LocalCalenderProps {
	/**
	 * The field in the resource table that represents the category of the event.
	 * @example "vacation_type_id"
	 */
	categoryField: F;
	/**
	 * The optional field in the resource table that represents the end date of the event.
	 *
	 * @example "to"
	 */
	endField?: F;
	/**
	 * Additional filter payload to be applied to the calendar events.
	 *
	 * @example {{ employee_id: id }}
	 */
	filter?: FilterPayload;
	/**
	 * The resource table for the calendar events.
	 * @example "vacations"
	 */
	resource: T;
	/**
	 * The field in the resource table that represents the start date of the event.
	 *
	 * @example "from"
	 */
	startField: F;
	/**
	 * The field in the resource table that represents the title of the event.
	 *
	 * @example "name"
	 */
	titleField: F;
}
/**
 * Component for rendering a dynamic calendar based on provided configuration.
 *
 */
export const DynamicCalender = <
	T extends NonJoinPublicTables = NonJoinPublicTables,
	F extends keyof Tables<T> = keyof Tables<T>,
>(
	props: DynamicCalenderProps<T, F>,
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

	const filterDefaultValues = () => ({
		...filter,
		...customGetFilterValues(String(startField)),
	});

	return (
		<InfiniteListBase
			disableSyncWithLocation={false}
			filter={filterDefaultValues()}
			filterDefaultValues={filterDefaultValues()}
			perPage={1000}
			resource={resource}
			storeKey={resource + 'DynamicCalender'}
		>
			<LocalCalender
				convertToEvent={(event: Tables<T>) => {
					const { id } = event;

					const title = get(event, titleField) as string;
					const category = get(event, categoryField) as string;

					return {
						id,
						start: get(event, startField) as string,
						title,
						...(endField && { end: get(event, endField) as string }),
						backgroundColor: stringToColor(category ?? ''),
						borderColor: stringToColor(category ?? ''),
					};
				}}
				getFilterValueFromInterval={customGetFilterValues(String(startField))}
				transform={props => {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					const { end, id, start, title } = props;

					return {
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						id,
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						...(startField && { [startField]: start }),
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						...(endField && { [endField]: end }),
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						...(titleField && { [titleField]: title }),
					};
				}}
				{...rest}
			/>
		</InfiniteListBase>
	);
};
