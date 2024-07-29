import 'survey-analytics/survey.analytics.min.css';

import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Empty } from 'src/components';
import { isDevelopment } from 'src/constants';
import { useListContext, useLocale, useStore } from 'src/hooks';
import { Tables } from 'src/types';
import {
	IVisualizationPanelOptions,
	MatrixPlotly,
	SelectBasePlotly,
	VisualizationPanel,
} from 'survey-analytics';
import { IState } from 'survey-analytics/survey-analytics.types/config';
import { Model } from 'survey-core';

MatrixPlotly.types = ['stackedbar', 'bar', 'pie', 'doughnut'];
SelectBasePlotly.types = ['doughnut', 'bar', 'pie', 'scatter'];

const vizPanelOptions: IVisualizationPanelOptions = {
	allowHideQuestions: true,
	allowSelection: true,
	allowTopNAnswers: isDevelopment,
};

export interface VixProps {
	identifier: string;
	surveyModel: Model;
}

const resultsToAnswers = (results: Tables<'survey_answers'>[]) =>
	results?.map(item => item.answers) as {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[index: string]: any;
	}[];

export const Vix: React.FC<VixProps> = props => {
	const { identifier, surveyModel } = props;

	const [state, setState] = useStore<IState | undefined>(
		`survey_$${identifier}_state`,
	);
	const { locale } = useLocale();

	const { data: surveyResults = [], isLoading } =
		useListContext<Tables<'survey_answers'>>();

	const [vizPanel, setVizPanel] = useState<null | VisualizationPanel>(null);

	useEffect(() => {
		if (!vizPanel && !!surveyModel && surveyResults?.length) {
			const vizPanel = new VisualizationPanel(
				surveyModel.getAllQuestions(),
				resultsToAnswers(surveyResults),
				{ ...vizPanelOptions, survey: surveyModel },
				state?.elements,
			);

			vizPanel.onStateChanged.add((_, state) => {
				setState(state as IState);
			});

			vizPanel.showToolbar = true;
			vizPanel.locale = locale;
			vizPanel.unregisterToolbarItem('changeLocale');
			setVizPanel(vizPanel);
		}

		vizPanel?.updateData(resultsToAnswers(surveyResults));
	}, [locale, setState, state, surveyModel, surveyResults, vizPanel]);

	useEffect(() => {
		if (vizPanel?.render) {
			vizPanel.render(identifier);
		}

		return () => {
			const div = document.querySelector(`#${identifier}`);

			if (div) div.innerHTML = '';
		};
	}, [identifier, vizPanel]);

	if (isLoading) return <CircularProgress size={20} />;

	if (!surveyResults?.length) return <Empty />;

	return <div id={identifier} />;
};
