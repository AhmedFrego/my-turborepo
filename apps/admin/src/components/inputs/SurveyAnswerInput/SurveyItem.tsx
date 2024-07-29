import React, { useCallback, useEffect, useMemo } from 'react';
import { PaletteMode } from 'src/constants';
import { useMode } from 'src/hooks';
import { Model } from 'survey-core';
import { SolidDark, SolidLight } from 'survey-core/themes';
import { Survey } from 'survey-react-ui';

export interface SurveyItemProps {
	onChange: (...args: unknown[]) => void;
	schema: unknown;
	value: unknown;
}

export const SurveyItem: React.FC<SurveyItemProps> = props => {
	const { onChange, schema, value } = props;

	const survey = useMemo(() => new Model(schema), [schema]);

	const [mode] = useMode();

	const submitResults = useCallback(
		(sender: { data: unknown }) => {
			onChange(sender.data);
		},
		[onChange],
	);

	useEffect(() => {
		survey.onComplete.add(submitResults);
		survey.onValueChanged.add(submitResults);
		survey.onCurrentPageChanged.add(submitResults);
	}, [
		submitResults,
		survey.onComplete,
		survey.onCurrentPageChanged,
		survey.onValueChanged,
	]);

	useEffect(() => {
		survey.applyTheme(mode === PaletteMode.dark ? SolidDark : SolidLight);
	}, [survey, mode]);

	useEffect(() => {
		survey.data = value;
	}, [survey, value]);

	return <Survey model={survey} />;
};
