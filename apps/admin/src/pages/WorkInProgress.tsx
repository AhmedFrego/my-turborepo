import { Box, Button, Typography } from '@mui/material';
import { sentenceCase } from 'change-case';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslate } from 'src/hooks';

export interface WorkInProgressProps {}

export const WorkInProgress: React.FC<WorkInProgressProps> = () => {
	const translate = useTranslate();
	const location = useLocation();

	return (
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				height: '100vh',
				justifyContent: 'center',
			}}
		>
			<Typography
				gutterBottom
				variant="h4"
			>
				{sentenceCase(location.pathname)}
			</Typography>
			<Typography
				gutterBottom
				variant="h4"
			>
				{translate('empty.yet')}
			</Typography>
			<Typography variant="subtitle1">
				{translate('empty.add_message')}
			</Typography>
			<Button
				color="primary"
				variant="contained"
			>
				{translate('empty.add')}
			</Button>
		</Box>
	);
};
