import { useTheme } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import {
	Chart,
	GoogleChartEditor,
	GoogleChartWrapper,
	GoogleViz,
	ReactGoogleChartProps,
} from 'react-google-charts';
import { isDevelopment } from 'src/constants';
import { useLocale, useTranslate } from 'src/hooks';

export interface GoogleChartsProps extends ReactGoogleChartProps {
	chartName: string;
}

export const GoogleCharts: React.FC<GoogleChartsProps> = props => {
	const { chartName, chartType: chartTypeProp, options, ...rest } = props;

	const theme = useTheme();
	const translate = useTranslate();

	const [chartType, setChartType] = useState(chartTypeProp);
	const [chartEditor, setChartEditor] = useState<GoogleChartEditor>();
	const [chartWrapper, setChartWrapper] = useState<GoogleChartWrapper>();
	const [google, setGoogle] = useState<GoogleViz>();
	const { locale } = useLocale();

	useEffect(() => {
		chartWrapper?.setChartName(chartName);
		chartWrapper?.setOptions({
			backgroundColor: theme.palette.background.default,
			legend: {
				textStyle: {
					color: theme.palette.text.primary,
				},
			},
			...options,
		});
	}, [
		chartName,
		chartWrapper,
		options,
		theme.palette.background.default,
		theme.palette.text.primary,
	]);

	const onEditClick = useCallback(() => {
		if (!chartWrapper || !google || !chartEditor) {
			return;
		}

		chartEditor.openDialog(chartWrapper);

		google.visualization.events.addListener(chartEditor, 'ok', () => {
			const newChartWrapper = chartEditor.getChartWrapper();

			newChartWrapper.draw();

			const newChartOptions = newChartWrapper.getOptions();
			const newChartType = newChartWrapper.getChartType();

			setChartType(newChartType);
			chartWrapper?.setOptions(newChartOptions);
		});
	}, [chartEditor, chartWrapper, google]);

	return (
		<>
			{isDevelopment ? (
				<button onClick={onEditClick}>{translate('ra.action.edit')}</button>
			) : null}
			<Chart
				chartLanguage={locale}
				chartPackages={[
					'calendar',
					'charteditor',
					'controls',
					'corechart',
					'gantt',
					'gauge',
					'geochart',
					'map',
					'orgchart',
					'sankey',
					'table',
					'timeline',
					'treemap',
					'wordtree',
				]}
				chartType={chartType}
				getChartEditor={({ chartEditor, chartWrapper, google }) => {
					setChartWrapper(chartWrapper);
					setChartEditor(chartEditor);
					setGoogle(google);
				}}
				height="100%"
				width="100%"
				{...rest}
			/>
		</>
	);
};
