import isError from 'lodash/isError';
import { useRefresh } from 'react-admin';
import { useNotify, useRecordContext } from 'src/hooks';
import { updateStatus } from 'src/providers';
import { Functions, Tables } from 'src/types';
import { SetOptional } from 'type-fest';

export const useUpdateStatus = () => {
	const record = useRecordContext<Tables<'base_requests'>>();
	const notify = useNotify();
	const refresh = useRefresh();

	return async (
		config: SetOptional<Functions<'update_request_status'>, 'record_id'>,
	) => {
		if (!record) return;

		try {
			await updateStatus({
				...config,
				record_id: record.id,
				request_type: record.type,
			});

			notify('ra.notification.updated', {
				messageArgs: { smart_count: 1 },
				type: 'info',
				undoable: true,
			});

			refresh();
		} catch (error: unknown) {
			if (typeof error === 'string' || isError(error))
				notify(
					typeof error === 'string'
						? error
						: (error.message ?? 'ra.notification.http_error'),
					{
						messageArgs: {
							_:
								typeof error === 'string'
									? error
									: (error.message ?? undefined),
						},
						type: 'error',
					},
				);

			refresh();
		}
	};
};
