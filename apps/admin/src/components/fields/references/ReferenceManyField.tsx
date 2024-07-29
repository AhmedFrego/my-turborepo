import {
	ReferenceManyField as RaReferenceManyField,
	ReferenceManyFieldProps as RaReferenceManyFieldProps,
} from 'react-admin';
import { RaRecord, useValidManyResourceColumn } from 'src/hooks';
import { NonJoinPublicTables } from 'src/types';

export interface ReferenceManyFieldProps<RecordType extends RaRecord = RaRecord>
	extends Omit<RaReferenceManyFieldProps<RecordType>, 'reference'> {
	reference: NonJoinPublicTables;
}

export const ReferenceManyField = <
	RecordType extends RaRecord = RaRecord,
	ReferenceRecordType extends RaRecord = RaRecord,
>(
	props: ReferenceManyFieldProps<RecordType>,
) => {
	useValidManyResourceColumn(props);

	// @ts-ignore - pass
	return <RaReferenceManyField<RecordType, ReferenceRecordType> {...props} />;
};
