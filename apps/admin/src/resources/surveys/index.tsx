import loadable from '@loadable/component';
import PollTwoTone from '@mui/icons-material/PollTwoTone';
import { CircularProgress } from '@mui/material';
import { sentenceCase } from 'change-case';
import { Route } from 'react-router-dom';
import { managed_admin } from 'src/resources/helpers';

import { SurveyList } from './List';
import { SurveyShow } from './Show';

const Analytics = loadable(
	() => import('./analytics').then(({ Analytics }) => Analytics),
	{ fallback: <CircularProgress /> },
);

export const Surveys = managed_admin({
	children: (
		<Route
			element={<Analytics />}
			path=":id/analytics"
		/>
	),
	hasCreate: false,
	hasEdit: false,
	icon: PollTwoTone,
	list: SurveyList,
	name: 'surveys',
	recordRepresentation: record => {
		const { name } = record;

		return sentenceCase(name);
	},
	show: SurveyShow,
});
