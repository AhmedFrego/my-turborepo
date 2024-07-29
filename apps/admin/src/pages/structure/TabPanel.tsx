import { Box } from '@mui/material';
import React from 'react';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

export const TabPanel: React.FC<TabPanelProps> = props => {
	const { children, index, value, ...other } = props;

	return (
		<div
			aria-labelledby={`vertical-tab-${value}`}
			hidden={value !== index}
			id={`vertical-tabpanel-${value}`}
			role="tabpanel"
			{...other}
		>
			{value === index ? (
				<Box
					sx={{
						m: 2,
						width: '100%',
					}}
				>
					{children}
				</Box>
			) : null}
		</div>
	);
};
