import { SelectInput } from 'src/components';
import {
	RaRecord,
	RaRecordInsert,
	RaRecordInsertTable,
	RaRecordTable,
} from 'src/hooks';
import { useRequestMutationOptions } from 'src/hooks/useRequestMutationOptions';
import { PublicTables, RequestStatuses } from 'src/types';
import { required } from 'src/validation';

import {
	BaseCallForActionCreate,
	BaseCallForActionCreateProps,
} from '../../base_call_for_action/Create';

export interface BaseRequestCreateProps<
	T extends PublicTables = PublicTables,
	RecordType extends RaRecordInsert = RaRecordInsertTable[T],
	ResultRecordType extends RaRecord = RaRecordTable[T],
> extends BaseCallForActionCreateProps<T, RecordType, ResultRecordType> {}

export const BaseRequestCreate = <
	T extends PublicTables = PublicTables,
	RecordType extends RaRecordInsert = RaRecordInsertTable[T],
	ResultRecordType extends RaRecord = RaRecordTable[T],
>(
	props: BaseRequestCreateProps<T, RecordType, ResultRecordType>,
) => {
	const { children, redirect: redirectProp, ...rest } = props;

	const requestMutationOptions = useRequestMutationOptions(redirectProp);

	return (
		<BaseCallForActionCreate
			mutationOptions={requestMutationOptions}
			{...rest}
		>
			{children}
			<SelectInput
				fullWidth
				choices={[
					{
						id: RequestStatuses.draft,
						name: `enum.request_statuses.${RequestStatuses.draft}`,
					},
					{
						id: RequestStatuses.submitted,
						name: `enum.request_statuses.${RequestStatuses.submitted}`,
					},
				]}
				defaultValue={RequestStatuses.submitted}
				source="status"
				validate={required()}
			/>
		</BaseCallForActionCreate>
	);
};
