import {
	SimpleList as RaSimpleList,
	SimpleListProps as RaSimpleListProps,
} from 'react-admin';
import { RaRecord } from 'src/hooks';

export interface SimpleListProps<RecordType extends RaRecord = RaRecord>
	extends RaSimpleListProps<RecordType> {}

export const SimpleList = <RecordType extends RaRecord = RaRecord>(
	props: SimpleListProps<RecordType>,
) => {
	const { ...rest } = props;

	return <RaSimpleList {...rest} />;
};
