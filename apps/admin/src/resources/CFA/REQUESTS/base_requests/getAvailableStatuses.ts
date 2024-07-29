import { RequestStatuses } from 'src/types';

export type GetAvailableStatuses = (
	status: RequestStatuses,
) => RequestStatuses[];

export const getAvailableStatuses: GetAvailableStatuses = (
	status: RequestStatuses,
) => {
	const availableStatuses: RequestStatuses[] = [];

	switch (status) {
		case RequestStatuses.initial: {
			availableStatuses.push(RequestStatuses.draft, RequestStatuses.submitted);

			break;
		}

		case RequestStatuses.approved: {
			availableStatuses.push(
				RequestStatuses.need_more_info,
				RequestStatuses.rejected,
			);

			break;
		}

		case RequestStatuses.cancelled: {
			availableStatuses.push(
				RequestStatuses.need_more_info,
				RequestStatuses.approved,
			);

			break;
		}

		case RequestStatuses.draft: {
			availableStatuses.push(...Object.values(RequestStatuses));
			break;
		}

		case RequestStatuses.in_review: {
			availableStatuses.push(
				RequestStatuses.need_more_info,
				RequestStatuses.rejected,
				RequestStatuses.approved,
			);

			break;
		}

		case RequestStatuses.need_more_info: {
			availableStatuses.push(
				RequestStatuses.in_review,
				RequestStatuses.rejected,
				RequestStatuses.approved,
			);

			break;
		}

		case RequestStatuses.rejected: {
			availableStatuses.push(
				RequestStatuses.approved,
				RequestStatuses.need_more_info,
			);

			break;
		}

		case RequestStatuses.submitted: {
			availableStatuses.push(RequestStatuses.in_review);

			break;
		}

		default: {
			break;
		}
	}

	return availableStatuses;
};
