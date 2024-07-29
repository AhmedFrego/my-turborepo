import { Box, useTheme } from '@mui/material';
import React from 'react';

import { FooterItem } from './FooterItem';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				alignItems: 'center',
				backgroundColor: theme.palette.action.hover,
				display: 'flex',
				flexDirection: 'row',
				p: 2,
			}}
		>
			<FooterItem
				icon={['↑', '↓']}
				title="custom.common.footer.navigation"
			/>
			<FooterItem
				icon="↵"
				title="custom.common.footer.open_result"
			/>
			<FooterItem
				icon="←"
				title="custom.common.footer.back"
			/>
		</Box>
	);
};
