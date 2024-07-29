import { RaRecord } from 'src/hooks';

import {
	BaseCallForActionCreate,
	BaseCallForActionCreateProps,
} from '../../base_call_for_action/Create';

export interface BaseComplaintCreateProps<
	RecordType extends Omit<RaRecord, 'id'> = Omit<RaRecord, 'id'>,
	ResultRecordType extends RaRecord = RaRecord,
> extends BaseCallForActionCreateProps<RecordType, ResultRecordType> {}

export const BaseComplaintCreate = <
	RecordType extends Omit<RaRecord, 'id'> = Omit<RaRecord, 'id'>,
	ResultRecordType extends RaRecord = RaRecord,
>(
	props: BaseComplaintCreateProps<RecordType, ResultRecordType>,
) => {
	const { children, ...rest } = props;

	return (
		<BaseCallForActionCreate {...rest}>{children}</BaseCallForActionCreate>
	);
};
