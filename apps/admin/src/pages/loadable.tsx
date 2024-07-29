import loadable from '@loadable/component';
import { CircularProgress } from '@mui/material';

export const OrganizationStructure = loadable(
	() =>
		import('./OrganizationStructure').then(
			({ OrganizationStructure }) => OrganizationStructure,
		),
	{ fallback: <CircularProgress /> },
);

export const MobileSurvey = loadable(
	() => import('./MobileSurvey').then(({ MobileSurvey }) => MobileSurvey),
	{ fallback: <CircularProgress /> },
);

export const MyRequestHistory = loadable(
	() =>
		import('./requests-history/MyRequestHistory').then(
			({ MyRequestHistory }) => MyRequestHistory,
		),
	{ fallback: <CircularProgress /> },
);

export const Dashboard = loadable(
	() => import('./dashboard').then(({ Dashboard }) => Dashboard),
	{ fallback: <CircularProgress /> },
);

export const FileManager = loadable(
	() => import('./files').then(({ FileManager }) => FileManager),
	{ fallback: <CircularProgress /> },
);
