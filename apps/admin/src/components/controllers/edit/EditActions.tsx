import React from 'react';
import {
	ListButton,
	ShareButton,
	ShowButton,
	TopToolbar,
} from 'src/components';

export interface EditActionsProps {}

export const EditActions: React.FC<
	React.PropsWithChildren<EditActionsProps>
> = props => {
	const { children } = props;

	return (
		<TopToolbar>
			{children}
			<ListButton />
			<ShowButton />
			<ShareButton />
		</TopToolbar>
	);
};
