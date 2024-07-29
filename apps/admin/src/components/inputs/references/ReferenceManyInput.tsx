import { styled } from '@mui/material';
import {
	ReferenceManyInput as RaReferenceManyInput,
	ReferenceManyInputProps as RaReferenceManyInputProps,
} from '@react-admin/ra-relationships';
import { allowAdminEnterprise } from 'src/constants';
import { useGetResourceLabel, useValidManyResourceColumn } from 'src/hooks';
import { NonJoinPublicTables, Tables } from 'src/types';

export interface ReferenceManyInputProps<
	T extends NonJoinPublicTables = NonJoinPublicTables,
> extends Omit<RaReferenceManyInputProps, 'reference' | 'target'> {
	reference: T;
	target: keyof Tables<T>;
}

export const ReferenceManyInput = <T extends NonJoinPublicTables>(
	props: ReferenceManyInputProps<T>,
) => {
	const { label, reference, target, ...rest } = props;

	useValidManyResourceColumn(props);

	const resourceLabel = useGetResourceLabel();

	if (!allowAdminEnterprise) return null;

	return (
		<RaReferenceManyInput
			label={
				<StyledMuiFormLabel>
					{label ?? resourceLabel(reference, 2)}
				</StyledMuiFormLabel>
			}
			reference={reference}
			target={target as string}
			{...rest}
		/>
	);
};

const StyledMuiFormLabel = styled('div')(({ theme }) => ({
	marginInlineStart: theme.spacing(2),
}));
