import { Box, styled } from '@mui/material';
import { Edit as RAEdit } from '@react-admin/ra-rbac';
import React, { ReactNode } from 'react';
import { EditProps as RAEditProps } from 'react-admin';
import { HotkeysProvider } from 'react-hotkeys-hook';
import { CloneButton, PreviousNextButtons } from 'src/components';

import { EditActions } from './EditActions';
import { EditHotKeys } from './EditHotKeys';
import { Essentials, EssentialsSlots } from '../Essentials';

export interface EditProps extends Omit<RAEditProps, 'actions'> {
	actions?: ReactNode;
	nextPrevious?: boolean;
	slots?: {
		essentials?: EssentialsSlots;
	};
}

export const Edit = (props: React.PropsWithChildren<EditProps>) => {
	const {
		actions,
		aside,
		children,
		nextPrevious = true,
		slots = {},
		...rest
	} = props;
	const { essentials } = slots;

	return (
		<HotkeysProvider>
			<StyledRAEdit
				actions={
					<EditActions>
						{nextPrevious ? (
							<Box>
								<PreviousNextButtons linkType="edit" />
							</Box>
						) : null}
						<Box flexGrow={1} />
						{actions}
						<CloneButton />
					</EditActions>
				}
				aside={<Essentials slots={essentials}>{aside}</Essentials>}
				{...rest}
			>
				<EditHotKeys />
				{children}
			</StyledRAEdit>
		</HotkeysProvider>
	);
};

const StyledRAEdit = styled(RAEdit, {
	name: 'RAEdit',
	overridesResolver: (_, styles) => styles.root,
})({
	[`& .RaEdit-card`]: {
		direction: 'ltr',
		width: '0',
	},
});
