import 'survey-core/defaultV2.min.css';
import 'survey-core/survey.i18n.js';

import { CircularProgress } from '@mui/material';
import React from 'react';
import { useInput } from 'src/components';
import { useGetList, useValidResourceColumn } from 'src/hooks';
import { InputProps } from 'src/types';

import { SurveyItem } from './SurveyItem';

export interface SurveyAnswerInputProps extends InputProps {
	surveyName: string;
}

export const SurveyAnswerInput: React.FC<SurveyAnswerInputProps> = props => {
	const { surveyName, ...rest } = props;

	useValidResourceColumn(props);

	const { data } = useGetList('surveys', {
		filter: { name: surveyName },
	});

	const schema = data?.at(0)?.survey_schema;

	const {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		field: { onChange, value },
	} = useInput({
		// Pass the event handlers to the hook but not the component as the field property already has them.
		// useInput will call the provided onChange and onBlur in addition to the default needed by react-hook-form.
		...rest,
	});

	if (!schema) return <CircularProgress size={20} />;

	return (
		<SurveyItem
			schema={schema}
			value={value as unknown}
			onChange={onChange}
		/>
	);
};
