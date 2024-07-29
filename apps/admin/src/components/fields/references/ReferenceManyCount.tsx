import {
	ReferenceManyCount as RaReferenceManyCount,
	ReferenceManyCountProps as RaReferenceManyCountProps,
} from 'react-admin';
import { RaRecord, useValidManyResourceColumn } from 'src/hooks';
import { NonJoinPublicTables } from 'src/types';

export interface ReferenceManyCountProps<RecordType extends RaRecord = RaRecord>
	extends Omit<RaReferenceManyCountProps<RecordType>, 'reference'> {
	reference: NonJoinPublicTables;
}

export const ReferenceManyCount = <RecordType extends RaRecord = RaRecord>(
	props: ReferenceManyCountProps<RecordType>,
) => {
	const { ...rest } = props;

	useValidManyResourceColumn(props);

	return <RaReferenceManyCount<RecordType> {...rest} />;
};
