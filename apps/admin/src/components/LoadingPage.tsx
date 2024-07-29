import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { useTranslate } from 'src/hooks';

export interface LoadingPageProps {}

export const LoadingPage: React.FC<LoadingPageProps> = () => {
	const translate = useTranslate();

	return (
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
				justifyContent: 'center',
			}}
		>
			<CircularProgress
				color="primary"
				size={80}
				sx={{ marginBottom: 2 }}
			/>
			<Typography
				color="textSecondary"
				variant="h5"
			>
				{translate('ra.page.loading')}
			</Typography>
		</Box>
	);
};
