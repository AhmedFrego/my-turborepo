import loadable from '@loadable/component';
import { CircularProgress } from '@mui/material';

export const ResourceYearly = loadable(
	() =>
		import('./nivo/ResourceYearly').then(
			({ ResourceYearly }) => ResourceYearly,
		),
	{ fallback: <CircularProgress /> },
);

export const AgeDistributionChart = loadable(
	() =>
		import('./recharts/AgeDistributionChart').then(
			({ AgeDistributionChart }) => AgeDistributionChart,
		),
	{ fallback: <CircularProgress /> },
);

export const GendersChart = loadable(
	() =>
		import('./recharts/GendersChart').then(({ GendersChart }) => GendersChart),
	{ fallback: <CircularProgress /> },
);

export const RelativesChart = loadable(
	() =>
		import('./recharts/RelativesChart').then(
			({ RelativesChart }) => RelativesChart,
		),
	{ fallback: <CircularProgress /> },
);

export const RequestStatusChart = loadable(
	() =>
		import('./recharts/RequestStatusChart').then(
			({ RequestStatusChart }) => RequestStatusChart,
		),
	{ fallback: <CircularProgress /> },
);

export const TurnoverChart = loadable(
	() =>
		import('./recharts/TurnoverChart').then(
			({ TurnoverChart }) => TurnoverChart,
		),
	{ fallback: <CircularProgress /> },
);

export const EmployeeRatings = loadable(
	() =>
		import('./recharts/EmployeeRatings').then(
			({ EmployeeRatings }) => EmployeeRatings,
		),
	{ fallback: <CircularProgress /> },
);

export const TurnoverPerMonthChart = loadable(
	() =>
		import('./google/GoogleTurnoverPerMonthChart').then(
			({ GoogleTurnoverPerMonthChart: TurnoverPerMonthChart }) =>
				TurnoverPerMonthChart,
		),
	{ fallback: <CircularProgress /> },
);

export const GoogleAgeDistributionChart = loadable(
	() =>
		import('./google/GoogleAgeDistributionChart').then(
			({ GoogleAgeDistributionChart }) => GoogleAgeDistributionChart,
		),
	{ fallback: <CircularProgress /> },
);

export const GoogleGendersChart = loadable(
	() =>
		import('./google/GoogleGendersChart').then(
			({ GoogleGendersChart }) => GoogleGendersChart,
		),
	{ fallback: <CircularProgress /> },
);

export const GoogleNationalitiesChart = loadable(
	() =>
		import('./google/GoogleNationalitiesChart').then(
			({ GoogleNationalitiesChart }) => GoogleNationalitiesChart,
		),
	{ fallback: <CircularProgress /> },
);

export const RequestHistoryChart = loadable(
	() =>
		import('./recharts/RequestHistoryChart').then(
			({ RequestHistoryChart }) => RequestHistoryChart,
		),
	{ fallback: <CircularProgress /> },
);

export const GoogleRequestsChart = loadable(
	() =>
		import('./google/GoogleRequestsChart').then(
			({ GoogleRequestsChart }) => GoogleRequestsChart,
		),
	{ fallback: <CircularProgress /> },
);

export const CountriesChart = loadable(
	() =>
		import('./google/GoogleCountriesChart').then(
			({ GoogleCountriesChart: CountriesChart }) => CountriesChart,
		),
	{ fallback: <CircularProgress /> },
);
