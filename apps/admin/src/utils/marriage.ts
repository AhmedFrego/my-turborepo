import { Tables } from "shared-first-tire";

export const determineEmployeeSocialStatus = (
	marriages?: Tables<'marriages'>[],
) => {
	// Check if there are no marriage records
	if (!marriages || marriages?.length === 0) {
		return 'single_or_unknown';
	}

	// Check if any marriage is still active
	const isCurrentlyMarried = marriages.some(
		marriage => !marriage.date_of_separation,
	);

	if (isCurrentlyMarried) {
		return 'married';
	}

	return (
		marriages.sort(
			(a, b) =>
				new Date(b.date_of_marriage).getTime() -
				new Date(a.date_of_marriage).getTime(),
		)[0]['separation_reason'] ?? 'single_or_unknown'
	);
};

export const determineMarriageStatus = ({
	date_of_separation,
	separation_reason,
}: Tables<'marriages'>) => {
	if (date_of_separation && separation_reason) {
		return separation_reason;
	}

	return 'married';
};
