import loadable from '@loadable/component';
import { Box, CircularProgress, Tab, Tabs } from '@mui/material';
import React from 'react';

const Analytics = loadable(
	() => import('./Analytics').then(({ Analytics }) => Analytics),
	{ fallback: <CircularProgress /> },
);

export const InsuranceSurvey = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					aria-label="basic tabs example"
					value={value}
					onChange={handleChange}
				>
					<Tab
						label="Health Report"
						{...a11yProps(0)}
					/>
					<Tab
						label="Insurance Companies"
						{...a11yProps(1)}
					/>
					<Tab
						label="Insurance Class"
						{...a11yProps(2)}
					/>
				</Tabs>
			</Box>
			<CustomTabPanel
				index={0}
				value={value}
			>
				<Analytics survey_name="health_report" />
			</CustomTabPanel>
			<CustomTabPanel
				index={1}
				value={value}
			>
				<Analytics
					answersConfig={{ resource: 'insurance_reports' }}
					survey_name="insurance_companies"
				/>
			</CustomTabPanel>
			<CustomTabPanel
				index={2}
				value={value}
			>
				<Analytics survey_name="insurance_class" />
			</CustomTabPanel>
		</Box>
	);
};

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
	const { children, index, value, ...other } = props;

	return (
		<div
			aria-labelledby={`simple-tab-${index}`}
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			role="tabpanel"
			{...other}
		>
			{value === index ? children : null}
		</div>
	);
};

function a11yProps(index: number) {
	return {
		'aria-controls': `simple-tabpanel-${index}`,
		id: `simple-tab-${index}`,
	};
}
