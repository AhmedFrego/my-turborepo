import 'survey-analytics/survey.analytics.min.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
	surveyModel: Model;
}

const resultsToAnswers = (results: Tables<'survey_answers'>[]) =>
	results?.map(item => item.answers) as {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[index: string]: any;
	}[];

export const Vix: React.FC<VixProps> = props => {
	const { surveyModel } = props;

	const { id } = useParams();
	const [state, setState] = useStore<IState | undefined>(`survey_$${id}_state`);
	const { locale } = useLocale();

	const { data: surveyResults = [] } =
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
			vizPanel.render('surveyVizPanel');
		}

		return () => {
			const div = document.querySelector('#surveyVizPanel');

			if (div) div.innerHTML = '';
		};
	}, [vizPanel]);

	return <div id="surveyVizPanel" />;
};
