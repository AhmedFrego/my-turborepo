import get from 'lodash/get';
import { FunctionField, FunctionFieldProps } from 'src/components';
import { RaRecord, useValidResourceColumn } from 'src/hooks';
import { transformId } from 'src/utils';

export interface ShortIdProps<RecordType extends RaRecord = RaRecord>
	extends Omit<FunctionFieldProps<RecordType>, 'render'> {}

export const ShortId = <RecordType extends RaRecord = RaRecord>(
	props: ShortIdProps<RecordType>,
) => {
	const { source = 'id', ...rest } = props;

	useValidResourceColumn(props);

	return (
		<FunctionField<RecordType>
			render={record => transformId(String(get(record, source)))}
			source={source}
			{...rest}
		/>
	);
};
