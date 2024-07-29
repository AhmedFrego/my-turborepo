import {
	FunctionField as RaFunctionField,
	FunctionFieldProps as RaFunctionFieldProps,
} from 'react-admin';
import { RaRecord, useValidResourceColumn } from 'src/hooks';

export interface FunctionFieldProps<RecordType extends RaRecord = RaRecord>
	extends RaFunctionFieldProps<RecordType> {}

export const FunctionField = <RecordType extends RaRecord = RaRecord>(
	props: FunctionFieldProps<RecordType>,
) => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return <RaFunctionField {...rest} />;
};
