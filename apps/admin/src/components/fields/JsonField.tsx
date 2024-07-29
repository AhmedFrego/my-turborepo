import ReactJson, { ReactJsonViewProps } from 'react-json-view';
import { RaRecord, useRecordContext, useValidResourceColumn } from 'src/hooks';
import { FieldProps } from 'src/types';

type Props<RecordType extends Omit<RaRecord, 'id'> | RaRecord = RaRecord> = {
	reactJsonOptions?: Omit<ReactJsonViewProps, 'src'>;
	source: string;
} & FieldProps<RecordType>;

export const JsonField = <
	RecordType extends Omit<RaRecord, 'id'> | RaRecord = RaRecord,
>(
	props: Props<RecordType>,
) => {
	const { reactJsonOptions = {}, source } = props;

	const record = useRecordContext<RecordType>();

	useValidResourceColumn(props);

	const value = record?.[source];

	return (
		<ReactJson
			{...reactJsonOptions}
			src={value}
		/>
	);
};
