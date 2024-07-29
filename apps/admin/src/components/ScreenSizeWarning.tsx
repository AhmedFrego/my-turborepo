import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useTranslate } from 'src/hooks';

export interface ScreenSizeWarningProps {}

export const ScreenSizeWarning: React.FC<ScreenSizeWarningProps> = () => {
	const translate = useTranslate();
	const theme = useTheme();

	return (
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				gap: theme.spacing(2),
				height: '100vh',
				justifyContent: 'center',
				padding: theme.spacing(2),
				textAlign: 'center',
			}}
		>
			<WarningTwoToneIcon sx={{ fontSize: 150 }} />
			<Typography variant="h5">
				{translate('custom.common.screen_size_is_too_small')}
			</Typography>
			<Typography variant="body1">
				{translate(
					'custom.common.try_using_a_larger_screen_size_or_zooming_out',
				)}
			</Typography>
		</Box>
	);
};
