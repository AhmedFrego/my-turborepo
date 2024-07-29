import React from 'react';
import { ListControllerProps, ListBase as RaListBase } from 'react-admin';
import { RaRecord } from 'src/hooks';

export interface ListBaseProps<RecordType extends RaRecord = RaRecord>
	extends ListControllerProps<RecordType> {
	children: React.ReactNode;
}

export const ListBase = <RecordType extends RaRecord = RaRecord>(
	props: ListBaseProps<RecordType>,
) => {
	const { ...rest } = props;

	return <RaListBase<RecordType> {...rest} />;
};
