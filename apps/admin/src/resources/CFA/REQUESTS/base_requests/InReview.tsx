import { useEffectOnce } from 'react-use';
import { useRecordContext } from 'src/hooks';
import { RequestStatuses, Tables } from 'src/types';
import { Logger } from 'src/utils';

import { useUpdateStatus } from './useUpdateStatus';

export const ReviewRecord = () => {
	const record = useRecordContext<Tables<'base_requests'>>();
	const updateStatus = useUpdateStatus();

	useEffectOnce(() => {
		if (record?.status === RequestStatuses.submitted.toString())
			updateStatus({
				change_message: 'AUTOMATIC',
				new_status_input: RequestStatuses.in_review,
				request_type: record.type,
			}).catch(Logger.error);
	});

	return null;
};

export const InReview = () => {
	const record = useRecordContext<Tables<'base_requests'>>();

	return record ? <ReviewRecord /> : null;
};
