/* eslint-disable i18next/no-literal-string */
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import { differenceInQuarters } from 'date-fns';
import get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer } from 'recharts';
import { useGetList, useRecordContext } from 'src/hooks';
import { Tables } from 'src/types';

import { QuarterlyReports } from './QuarterlyReports';
import { ReportsList } from './ReportsList';

export interface EmployeeRatingsProps {}

export const EmployeeRatings: React.FC<EmployeeRatingsProps> = () => {
	const record = useRecordContext<Tables<'employees'>>();
	const { id } = useParams<string>();
	const theme = useTheme();

	const {
		data: reports,
		error,
		isLoading,
	} = useGetList(
		'employee_reports',
		{
			filter: { employee_id: id },
			pagination: { page: 1, perPage: 1000 },
		},
		{ enabled: !!id },
	);

	const start = record?.date_of_hiring;

	const sortedReports = useMemo(() => sortBy(reports, 'quarter'), [reports]);

	if (isLoading) {
		return <CircularProgress size={20} />;
	}

	if (error) {
		return <Typography>Error fetching reports</Typography>;
	}

	if (!start) {
		return <ReportsList reports={sortedReports} />;
	}

	const startDate = new Date(start);
	const currentDate = new Date();

	const diffQ = differenceInQuarters(currentDate, startDate);

	return (
		<Box>
			{sortedReports.length > 1 ? (
				<ResponsiveContainer
					height={50}
					style={{ margin: 8 }}
					width="100%"
				>
					<LineChart
						data={sortedReports?.map(({ answers, quarter }) => ({
							name: quarter,
							total: Number(get(answers, 'total')),
						}))}
					>
						<Line
							dataKey="total"
							stroke={theme.palette.primary.main}
							strokeWidth={2}
							type="monotone"
						/>
					</LineChart>
				</ResponsiveContainer>
			) : null}
			<QuarterlyReports
				differenceInQuarters={diffQ}
				sortedReports={sortedReports}
				startDate={startDate}
			/>
		</Box>
	);
};
