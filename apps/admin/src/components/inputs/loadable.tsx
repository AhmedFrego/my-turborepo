import loadable from '@loadable/component';
import { CircularProgress } from '@mui/material';

export const PhoneInput = loadable(
	() => import('./PhoneInput').then(({ PhoneInput }) => PhoneInput),
	{ fallback: <CircularProgress /> },
);

export const IBANInput = loadable(
	() => import('./IBANInput').then(({ IBANInput }) => IBANInput),
	{ fallback: <CircularProgress /> },
);

export const QuarterInput = loadable(
	() => import('./date/QuarterInput').then(({ QuarterInput }) => QuarterInput),
	{ fallback: <CircularProgress /> },
);

export const SurveyAnswerInput = loadable(
	() =>
		import('./SurveyAnswerInput').then(
			({ SurveyAnswerInput }) => SurveyAnswerInput,
		),
	{ fallback: <CircularProgress /> },
);
