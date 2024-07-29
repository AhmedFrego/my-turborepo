import loadable from '@loadable/component';
import { CircularProgress } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import {
	Empty,
	InfiniteListBase,
	InfiniteListBaseProps,
	InfinitePagination,
} from 'src/components';
import { PaletteMode } from 'src/constants';
import { useGetList, useMode } from 'src/hooks';
import { Model } from 'survey-core';
import { SolidDark, SolidLight } from 'survey-core/themes';
const Vix = loadable(
	() => import('./Vix').then(module => ({ default: module.Vix })),
	{ fallback: <CircularProgress /> },
);

export interface AnalyticsProps {
	answersConfig?: InfiniteListBaseProps;
	survey_name: string;
}

export const Analytics: React.FC<AnalyticsProps> = props => {
	const { answersConfig, survey_name } = props;

	const { data } = useGetList('surveys', {
		filter: {
			name: survey_name,
		},
	});

	const surveySchema = data?.[0];

	const surveyModel = useMemo(() => {
		if (surveySchema?.survey_schema) {
			return new Model(surveySchema.survey_schema);
		}
	}, [surveySchema?.survey_schema]);

	const [mode] = useMode();

	useEffect(() => {
		surveyModel?.applyTheme(mode === PaletteMode.dark ? SolidDark : SolidLight);
	}, [surveyModel, mode]);

	if (!surveySchema?.id) return null;

	return (
		<InfiniteListBase
			perPage={1000}
			{...(answersConfig ?? {
				filter: { survey_id: surveySchema.id },
				resource: 'survey_answers',
			})}
			storeKey={survey_name + 'Analytics'}
		>
			{surveySchema && surveyModel ? (
				<Vix
					identifier={survey_name}
					surveyModel={surveyModel}
				/>
			) : (
				<Empty />
			)}
			<InfinitePagination />
		</InfiniteListBase>
	);
};
