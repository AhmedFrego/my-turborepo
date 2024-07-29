import {
	ReferenceField as RaReferenceField,
	ReferenceFieldProps as RaReferenceFieldProps,
} from 'react-admin';
import { ReferenceTables } from 'src/components';
import { useValidResourceColumn } from 'src/hooks';

export interface ReferenceFieldProps<R extends ReferenceTables>
	extends RaReferenceFieldProps {
	reference: R;
}

export const ReferenceField = <R extends ReferenceTables>(
	props: ReferenceFieldProps<R>,
) => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return <RaReferenceField {...rest} />;
};
