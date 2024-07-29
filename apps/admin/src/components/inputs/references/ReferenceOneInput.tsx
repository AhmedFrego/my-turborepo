import {
	ReferenceOneInput as RaReferenceOneInput,
	ReferenceOneInputProps as RaReferenceOneInputProps,
} from '@react-admin/ra-relationships';
import React from 'react';
import { allowAdminEnterprise } from 'src/constants';
import { NonJoinPublicTables } from 'src/types';

export interface ReferenceOneInputProps extends RaReferenceOneInputProps {
	reference: NonJoinPublicTables;
}

export const ReferenceOneInput: React.FC<ReferenceOneInputProps> = props => {
	const { disabled, fullWidth = true, ...rest } = props;

	if (!allowAdminEnterprise) return null;

	return (
		<RaReferenceOneInput
			disabled={disabled}
			fullWidth={fullWidth}
			variant="outlined"
			{...rest}
		/>
	);
};
