/* eslint-disable i18next/no-literal-string */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Tables } from 'src/types';

import { ReportCard } from './ReportCard';

export interface ReportsListProps {
	reports: Tables<'employee_reports'>[];
}

export const ReportsList: React.FC<ReportsListProps> = props => {
	const { reports } = props;

	return (
		<Grid
			container
			spacing={2}
		>
			{reports.length > 0 ? (
				reports.map(report => (
					<Grid
						key={report.id}
						item
						md={4}
						sm={6}
						xs={12}
					>
						<ReportCard report={report} />
					</Grid>
				))
			) : (
				<Typography>No reports available</Typography>
			)}
		</Grid>
	);
};
