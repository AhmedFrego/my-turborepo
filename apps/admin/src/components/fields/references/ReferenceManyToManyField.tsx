import {
	ReferenceManyToManyField as RaReferenceManyToManyField,
	ReferenceManyToManyFieldProps as RaReferenceManyToManyFieldProps,
} from '@react-admin/ra-relationships';
import { JoinPublicTables, NonJoinPublicTables, Tables } from 'src/types';

export interface ReferenceManyToManyFieldProps<
	R extends NonJoinPublicTables = NonJoinPublicTables,
	T extends JoinPublicTables = JoinPublicTables,
	U extends keyof Tables<T> = keyof Tables<T>,
> extends RaReferenceManyToManyFieldProps {
	reference: R;
	through: T;
	using: `${U extends string ? U : ''},${U extends string ? U : ''}`;
}

export const ReferenceManyToManyField = <
	R extends NonJoinPublicTables = NonJoinPublicTables,
	T extends JoinPublicTables = JoinPublicTables,
>(
	props: ReferenceManyToManyFieldProps<R, T>,
) => {
	const { ...rest } = props;

	return <RaReferenceManyToManyField {...rest} />;
};
