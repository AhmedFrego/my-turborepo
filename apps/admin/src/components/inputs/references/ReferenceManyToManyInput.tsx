import {
	ReferenceManyToManyInput as RaReferenceManyToManyInput,
	ReferenceManyToManyInputProps as RaReferenceManyToManyInputProps,
} from '@react-admin/ra-relationships';
import { allowAdminEnterprise } from 'src/constants';
import {
	JoinPublicTables,
	NonJoinPublicTables,
	Tables,
	UtilFieldsNames,
} from 'src/types';

export interface ReferenceManyToManyInputProps<
	R extends NonJoinPublicTables = NonJoinPublicTables,
	T extends JoinPublicTables = JoinPublicTables,
	U extends Exclude<keyof Tables<T>, UtilFieldsNames> = Exclude<
		keyof Tables<T>,
		UtilFieldsNames
	>,
> extends Omit<RaReferenceManyToManyInputProps, 'using'> {
	reference: R;
	sourceId: U extends `${string}_id` ? U : never;
	targetId: U extends `${string}_id` ? U : never;
	through: T;
	using?: `${U extends `${string}_id` ? U : never},${U extends `${string}_id`
		? U
		: never}`;
}

export const ReferenceManyToManyInput = <
	R extends NonJoinPublicTables = NonJoinPublicTables,
	T extends JoinPublicTables = JoinPublicTables,
>(
	props: ReferenceManyToManyInputProps<R, T>,
) => {
	const { sourceId, targetId, using, ...rest } = props;

	if (
		!using &&
		!(typeof sourceId === 'string' && typeof targetId === 'string')
	) {
		throw new Error(
			'ReferenceManyToManyInput Require using sourceId && targetId',
		);
	}

	if (!allowAdminEnterprise) return null;

	return (
		<RaReferenceManyToManyInput
			using={using ?? `${sourceId},${targetId}`}
			{...rest}
		/>
	);
};
