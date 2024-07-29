import { Box, Tooltip } from '@mui/material';
import get from 'lodash/get';
import React from 'react';
import { Link } from 'react-router-dom';
import { QuarterField, RatingField } from 'src/components';
import { useCreatePath } from 'src/hooks';
import { Tables } from 'src/types';

export interface ReportCardProps {
	report: Tables<'employee_reports'>;
}

export const ReportCard: React.FC<ReportCardProps> = props => {
	const { report } = props;
	const createPath = useCreatePath();

	return (
		<Tooltip title={`Total ${String(get(report.answers, 'total'))}`}>
			<Box
				component={Link}
				sx={{
					alignItems: 'center',
					cursor: 'pointer',
					display: 'flex',
					m: 2,
				}}
				to={{
					pathname: createPath({
						id: report.id,
						resource: 'employee_reports',
						type: 'edit',
					}),
				}}
			>
				<QuarterField
					record={report}
					source="quarter"
					sx={{ mr: 1 }}
				/>
				<RatingField
					precision={0.1}
					record={report}
					source="answers.total"
					transform={number => number / 40}
				/>
			</Box>
		</Tooltip>
	);
};
