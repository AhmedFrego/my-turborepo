import loadable from '@loadable/component';
import { CircularProgress } from '@mui/material';
import isError from 'lodash/isError';
import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Empty, InfiniteListBase, InfinitePagination } from 'src/components';
import { useGetOne, useMode } from 'src/hooks';
import { Model } from 'survey-core';
import { SolidDark, SolidLight } from 'survey-core/themes';

const Vix = loadable(
	() => import('./Vix').then(module => ({ default: module.Vix })),
	{ fallback: <CircularProgress /> },
);

export interface AnalyticsProps {}

// Using named export for consistency and maintainability
export const Analytics: React.FC<AnalyticsProps> = () => {
	const { id } = useParams<{ id: string }>(); // TypeScript for type safety
	const [mode] = useMode();

	const { data, error, isLoading } = useGetOne('surveys', { id: String(id) });

	const { id: surveyId, survey_schema: surveySchema } = data ?? {};

	const surveyModel = useMemo(() => {
		if (surveyId) {
			return new Model(surveySchema);
		}
	}, [surveyId, surveySchema]);

	useEffect(() => {
		if (surveyModel) {
			surveyModel.applyTheme(mode === 'dark' ? SolidDark : SolidLight);
		}
	}, [surveyModel, mode]);

	if (isLoading) return <CircularProgress />;
	if (isError(error)) return <div>{error.message}</div>;

	// Constants for magic numbers
	const PER_PAGE = 1000;

	return (
		<InfiniteListBase
			filter={{ survey_id: id }}
			perPage={PER_PAGE}
			resource="survey_answers"
			storeKey={id + 'Analytics'}
		>
			{surveyModel ? <Vix surveyModel={surveyModel} /> : <Empty />}
			<InfinitePagination />
		</InfiniteListBase>
	);
};
