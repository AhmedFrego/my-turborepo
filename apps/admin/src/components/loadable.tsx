import loadable from '@loadable/component';
import { CircularProgress } from '@mui/material';

export const LocalCalender = loadable(
	() => import('./LocalCalender').then(({ LocalCalender }) => LocalCalender),
	{ fallback: <CircularProgress /> },
);
