import {
	ReferenceField,
	ReferenceFieldProps,
	ReferenceTables,
} from 'src/components';
import { useValidResourceColumn } from 'src/hooks';
import { SetOptional } from 'type-fest';

export interface ReferenceTypeFieldProps
	extends SetOptional<ReferenceFieldProps<ReferenceTables>, 'reference'> {}

export const ReferenceTypeField = (props: ReferenceTypeFieldProps) => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return (
		<ReferenceField
			reference={'types' as ReferenceTables}
			{...rest}
		/>
	);
};
