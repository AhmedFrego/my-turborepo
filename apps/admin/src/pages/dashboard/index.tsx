import 'react-grid-layout/css/styles.css';

import { Box, styled, useTheme } from '@mui/material';
import get from 'lodash/get';
import React, { useCallback, useMemo } from 'react';
import { DashboardComponent, usePreferencesEditor } from 'react-admin';
import RGL, { WidthProvider } from 'react-grid-layout';
import { useNavigate } from 'react-router-dom';
import {
	AgeDistributionChart,
	GoogleAgeDistributionChart,
	GoogleGendersChart,
	GoogleNationalitiesChart,
	GoogleRequestsChart,
	RequestHistoryChart,
	RequestStatusChart,
	TurnoverChart,
	TurnoverPerMonthChart,
} from 'src/charts';
import { InfiniteListBase, Title } from 'src/components';
import { useCreatePath, useTranslate } from 'src/hooks';

import { ChartCard } from './ChartCard';
import { TimeBasedGreeting } from './TimeBasedGreeting';
import { config } from './config';

const ReactGridLayout = WidthProvider(RGL);

export const Dashboard: DashboardComponent = () => {
	const translate = useTranslate();
	const navigate = useNavigate();
	const createPath = useCreatePath();
	const theme = useTheme();

	const cards = Object.keys(config);

	const state = useMemo(() => cards.map(key => ({ id: key })), [cards]);

	const { isEnabled } = usePreferencesEditor();

	// Function to handle chart click events
	const handleChartClick = useCallback(
		(gender: string) => {
			navigate({
				pathname: createPath({ resource: 'employees' }),
				search: `filter=${JSON.stringify({ gender })}`,
			});
		},
		[navigate, createPath],
	);

	// Render method for each dashboard item
	const renderItem = useCallback(
		(item: { id: string }, index: number) => {
			const { id } = item;

			if (!cards.includes(id)) return null;

			return (
				<Item
					key={id}
					data-grid={{
						h: 2,
						w: 4,
						x: (index % 3) * 4,
						y: Math.floor(index / 3) + 1,
					}}
					sx={{ background: 'transparent', p: 0 }}
				>
					{get(config, `${id}.component`, null) as React.ReactNode}
				</Item>
			);
		},
		[cards],
	);

	return (
		<>
			<Title title={translate('ra.page.dashboard')} />
			<InfiniteListBase
				perPage={1000}
				resource="employees"
				storeKey="Dashboard"
			>
				<ReactGridLayout
					className="layout"
					cols={12}
					isDraggable={isEnabled}
					isDroppable={isEnabled}
					isResizable={isEnabled}
					rowHeight={40}
					style={{ direction: 'ltr' }}
				>
					<Item
						key="a"
						data-grid={{ h: 2, static: true, w: 12, x: 0, y: 0 }}
					>
						<Box
							sx={{
								alignItems: 'center',
								direction: theme.direction,
								display: 'flex',
								flex: 1,
								justifyContent: 'center',
								padding: 2,
							}}
						>
							<TimeBasedGreeting />
						</Box>
					</Item>
					{state.map((element, index) => renderItem(element, index))}
					<Item
						key="b"
						data-grid={{ h: 10, w: 12, x: 0, y: 15 }}
					>
						<TurnoverChart />
					</Item>
					<Item
						key="c"
						data-grid={{ h: 10, w: 8, x: 0, y: 15 }}
					>
						<RequestHistoryChart />
					</Item>
					<Item
						key="d"
						data-grid={{ h: 10, w: 4, x: 8, y: 25 }}
					>
						<TurnoverPerMonthChart />
					</Item>
					<Item
						key="e"
						data-grid={{ h: 10, w: 6, x: 0, y: 25 }}
					>
						<GoogleAgeDistributionChart />
					</Item>
					<Item
						key="f"
						data-grid={{ h: 10, w: 6, x: 6, y: 35 }}
					>
						<AgeDistributionChart />
					</Item>
					<Item
						key="g"
						data-grid={{ h: 10, w: 6, x: 0, y: 35 }}
					>
						<GoogleGendersChart onClick={handleChartClick} />
					</Item>
					<Item
						key="h"
						data-grid={{ h: 10, w: 6, x: 6, y: 45 }}
					>
						<GoogleNationalitiesChart />
					</Item>
					<Item
						key="i"
						data-grid={{ h: 10, w: 6, x: 0, y: 45 }}
					>
						<RequestStatusChart />
					</Item>
					<Item
						key="j"
						data-grid={{ h: 10, w: 6, x: 6, y: 55 }}
					>
						<GoogleRequestsChart />
					</Item>
				</ReactGridLayout>
			</InfiniteListBase>
		</>
	);
};

const Item = styled(ChartCard)(({ theme }) => ({
	...theme.typography.body2,
	alignItems: 'center',
	color: theme.palette.text.secondary,
	display: 'flex',
	justifyContent: 'center',
	padding: theme.spacing(0.5),
	textAlign: 'center',
}));
