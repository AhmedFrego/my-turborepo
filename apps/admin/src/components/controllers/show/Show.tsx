import { Box } from '@mui/material';
import { Show as RAShow } from '@react-admin/ra-rbac';
import React from 'react';
import { ShowProps as RAShowProps } from 'react-admin';
import { useNavigate, useParams } from 'react-router-dom';
import {
	PreviousNextButtons,
	SimpleShowLayout,
	SimpleShowLayoutSlots,
} from 'src/components';
import { useCreatePath, useHotkeys, useResourceDefinition } from 'src/hooks';

import { ShowActions } from './ShowActions';
import { ShowHotKeys } from './ShowHotKeys';
import { Essentials, EssentialsSlots } from '../Essentials';

export interface ShowProps extends RAShowProps {
	nextPrevious?: boolean;
	slots?: {
		essentials?: EssentialsSlots;
		footer?: React.ReactNode;
		layout?: SimpleShowLayoutSlots;
	};
}

export const Show = (props: React.PropsWithChildren<ShowProps>) => {
	const {
		actions,
		aside,
		children,
		nextPrevious = true,
		slots = {},
		...rest
	} = props;
	const { essentials, footer, layout } = slots;

	const { id } = useParams();
	const { hasEdit, name } = useResourceDefinition();
	const createPath = useCreatePath();
	const navigate = useNavigate();

	useHotkeys('show.EDIT_ITEM', () => {
		if (hasEdit && id)
			navigate(createPath({ id, resource: name, type: 'edit' }));
	});

	return (
		<RAShow
			actions={
				<ShowActions>
					{nextPrevious ? (
						<Box>
							<PreviousNextButtons linkType="show" />
						</Box>
					) : null}
					<Box flexGrow={1} />
					{actions}
				</ShowActions>
			}
			aside={<Essentials slots={essentials}>{aside}</Essentials>}
			{...rest}
		>
			<ShowHotKeys />
			<SimpleShowLayout slots={layout}>{children}</SimpleShowLayout>
			{footer}
		</RAShow>
	);
};
