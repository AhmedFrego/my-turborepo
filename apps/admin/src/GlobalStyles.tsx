import { GlobalStyles as MuiGlobalStyles, useTheme } from '@mui/material';
import React from 'react';

export interface GlobalStylesProps {}

export const GlobalStyles: React.FC<GlobalStylesProps> = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const autoImportant = 'auto !important';

	return (
		<MuiGlobalStyles
			styles={{
				'*': {
					direction: 'ltr',
				},
				'*::-webkit-scrollbar': {
					height: theme.spacing(1.5),
					width: theme.spacing(1.5),
				},
				'*::-webkit-scrollbar-thumb': {
					WebkitBoxShadow: `inset 0 0 ${isDark ? theme.spacing(1.75) : theme.spacing(5)} ${
						theme.palette.primary.main
					}`,
				},
				'*::-webkit-scrollbar-track': {
					WebkitBoxShadow: `inset 0 0  ${
						isDark ? theme.spacing(4) : theme.spacing(0.75)
					}`,
				},
				'.google-visualization-charteditor-dialog': {
					height: autoImportant,
					width: autoImportant,
				},
				'.modal-dialog': {
					'z-index': 10,
				},
				'.MuiDrawer-paper': {
					'::-webkit-scrollbar': {
						width: theme.spacing(0.5),
					},
					'::-webkit-scrollbar-track': {
						WebkitBoxShadow: `inset 0 0  ${
							isDark ? theme.spacing(0.5) : theme.spacing(0.25)
						}`,
					},
					height: '100%',
				},
				'.nc-footer, .sa-commercial, .svc-creator__banner': {
					display: 'none !important',
				},
				'.RaSolarLayout-content': {
					paddingInlineEnd: `0 !important`,
				},
			}}
		/>
	);
};
