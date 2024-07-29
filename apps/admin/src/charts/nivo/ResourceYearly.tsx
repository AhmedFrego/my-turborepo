import {
	Box,
	Button,
	ButtonGroup,
	CircularProgress,
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
	useTheme,
} from '@mui/material';
import { ResponsiveCalendar } from '@nivo/calendar';
import { addDays, format } from 'date-fns';
import get from 'lodash/get';
import groupBy from 'lodash/groupBy';
import maxBy from 'lodash/maxBy';
import minBy from 'lodash/minBy';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	columnsHash,
	dateUserType,
	defaultTimestampWithTimeZone,
	nameHash,
	structure,
	tableHash,
	timestampWithTimeZone,
	typeHash,
} from 'src/common';
import { ResourceCalenderProps } from 'src/components';
import { useCreatePath, useListContext, useTranslate } from 'src/hooks';
import { TranslationsPaths } from 'src/locales';
import { NonJoinPublicTables, Tables } from 'src/types';

export const ResourceYearly = <
	T extends NonJoinPublicTables = NonJoinPublicTables,
	F extends keyof Tables<T> = keyof Tables<T>,
>(
	props: ResourceCalenderProps<T, F>,
) => {
	const { filter, resource, startField: startFieldProp } = props;

	const theme = useTheme();
	const navigate = useNavigate();
	const translate = useTranslate();
	const createPath = useCreatePath();
	const { data, isLoading } = useListContext();
	const [startField, setStartField] = useState(startFieldProp);
	const [year, setYear] = useState(new Date().getFullYear());

	const dateFields = structure
		.find(item => item[tableHash] === resource)
		?.[columnsHash].filter(item =>
			[
				dateUserType,
				defaultTimestampWithTimeZone,
				timestampWithTimeZone,
			].includes(item[typeHash]),
		)
		.map(item => item[nameHash]);

	// Refactored parseDate for readability and performance
	const parseDate = (item: object) =>
		format(new Date(String(get(item, startField))), 'yyyy-mm-dd');

	const parsedData = Object.entries(groupBy(data, parseDate)).map(
		([key, values]) => ({ day: key, value: values.length }),
	);

	const [earliest, latest] = [minBy, maxBy].map(callback => {
		const date = callback(data, parseDate);

		if (date) return get(date, startField) as null | string;
	});

	if (isLoading) return <CircularProgress size={200} />;
	if (!data?.length) return null;

	const [earliestDate, latestDate] = [earliest, latest].map(date => {
		if (date) return new Date(date).getFullYear();
	});

	const colors = [
		'#a5d6a7',
		'#81c784',
		'#66bb6a',
		'#4caf50',
		'#43a047',
		'#388e3c',
		'#2e7d32',
		'#1b5e20',
	];

	const handleChange = (event: SelectChangeEvent) => {
		setStartField(event.target.value as F);
	};

	return (
		<div>
			{/* Reduced Box duplication by merging common styles */}
			<Box
				display="flex"
				justifyContent="space-between"
				sx={{ mx: 1 }}
			>
				<ButtonGroup>
					{['previous', 'next'].map((type, index) => (
						<Button
							key={type}
							disabled={
								(type === 'previous' ? earliestDate : latestDate) === year
							}
							onClick={() => setYear(year + (index === 0 ? -1 : 1))}
						>
							{translate(`ra.navigation.${type}`)}
						</Button>
					))}
				</ButtonGroup>
				<FormControl sx={{ width: theme.spacing(30) }}>
					<Select
						value={String(startField)}
						variant="outlined"
						onChange={handleChange}
					>
						{dateFields?.map(field => (
							<MenuItem
								key={field}
								value={field}
							>
								{translate(
									`resources.${resource}.fields.${field}` as TranslationsPaths,
								)}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
			<Box
				height="80vh"
				width="100%"
			>
				<ResponsiveCalendar
					colors={colors}
					data={parsedData}
					dayBorderWidth={2}
					daySpacing={2}
					from={`${year}-01-01`}
					margin={{
						bottom: 40,
						left: 40,
						right: 40,
						top: 40,
					}}
					monthSpacing={20}
					to={`${year}-12-31`}
					yearSpacing={40}
					onClick={({ day, ...rest }) => {
						const dayDate = new Date(day);

						if (get(rest, 'value'))
							navigate({
								pathname: createPath({ resource }),
								search: `filter=${JSON.stringify({
									...filter,
									[`${String(startField)}@gte`]: dayDate,
									[`${String(startField)}@lte`]: addDays(dayDate, 1),
								})}`,
							});
					}}
				/>
			</Box>
		</div>
	);
};
