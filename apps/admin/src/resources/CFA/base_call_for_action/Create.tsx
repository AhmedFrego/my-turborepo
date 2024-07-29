import React from 'react';
import {
	Create,
	CreateProps,
	SimpleFormConfigurable,
	SimpleFormConfigurableProps,
	TextInput,
} from 'src/components';
import {
	RaRecord,
	RaRecordInsert,
	RaRecordInsertTable,
	RaRecordTable,
} from 'src/hooks';
import { PublicTables } from 'src/types';

export interface BaseCallForActionCreateProps<
	T extends PublicTables = PublicTables,
	RecordType extends RaRecordInsert = RaRecordInsertTable[T],
	ResultRecordType extends RaRecord = RaRecordTable[T],
> extends CreateProps<T, RecordType, ResultRecordType> {
	children?: React.ReactNode;
	formProps?: SimpleFormConfigurableProps;
}

export const BaseCallForActionCreate = <
	T extends PublicTables = PublicTables,
	RecordType extends RaRecordInsert = RaRecordInsertTable[T],
	ResultRecordType extends RaRecord = RaRecordTable[T],
>(
	props: BaseCallForActionCreateProps<T, RecordType, ResultRecordType>,
) => {
	const { children, formProps, ...rest } = props;

	return (
		<Create<T, RecordType, ResultRecordType> {...rest}>
			<SimpleFormConfigurable {...formProps}>
				<TextInput
					label="resources.base_call_for_action.fields.title"
					source="title"
				/>
				<TextInput
					label="resources.base_call_for_action.fields.notes"
					source="notes"
				/>
				{children}
			</SimpleFormConfigurable>
		</Create>
	);
};
