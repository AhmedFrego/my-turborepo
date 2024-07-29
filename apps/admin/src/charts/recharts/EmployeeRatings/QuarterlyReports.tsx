/* eslint-disable i18next/no-literal-string */
import { Box, Typography } from '@mui/material';
import { addQuarters, getQuarter, getYear, isSameQuarter } from 'date-fns';
import React from 'react';
import { Tables } from 'src/types';

import { ReportCard } from './ReportCard';

export interface QuarterlyReportsProps {
	differenceInQuarters: number;
	sortedReports: Tables<'employee_reports'>[];
	startDate: Date;
}

export const QuarterlyReports: React.FC<QuarterlyReportsProps> = props => {
	const { differenceInQuarters, sortedReports, startDate } = props;

	return (
		<Box>
			{Array.from({
				length: differenceInQuarters > 5 ? 5 : differenceInQuarters + 1,
			}).map((item, index) => {
				const quarterDate = addQuarters(startDate, index);
				const report = sortedReports.find(
					r => r.quarter && isSameQuarter(new Date(r.quarter), quarterDate),
				);

				return report ? (
					<ReportCard
						key={report.id}
						report={report}
					/>
				) : (
					<Typography
						key={String(item) + index}
						sx={{ m: 2 }}
					>
						No report for {getYear(quarterDate)} Q{getQuarter(quarterDate)}
					</Typography>
				);
			})}
		</Box>
	);
};
