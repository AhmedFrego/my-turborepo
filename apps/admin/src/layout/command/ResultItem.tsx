import ArrowLeft from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import ArrowRight from '@mui/icons-material/KeyboardArrowRightTwoTone';
import { Box, Stack } from '@mui/material';
import { ActionId, ActionImpl } from 'kbar';
import React, { forwardRef } from 'react';
import { DirectionEnum } from 'src/constants';
import { useLocale } from 'src/hooks';
import { Key } from 'ts-key-enum';

import {
	Kbd,
	StyledActionWrapper,
	StyledResultItem,
	StyledShortcutWrapper,
} from './styled';

function makeOsRelatedShortcut(shortcut: string): string[] {
	const keys = shortcut.split('+');

	return keys.map(key => {
		if (key === '$mod') {
			return Key.Shift;
		}

		return key;
	});
}

export interface ResultItemProps {
	action: ActionImpl;
	active: boolean;
	currentRootActionId: ActionId | null | undefined;
}

export const ResultItem = forwardRef(
	(props: ResultItemProps, ref: React.Ref<HTMLDivElement>) => {
		const { action, active, currentRootActionId } = props;

		const { direction } = useLocale();

		const ancestors = React.useMemo(() => {
			if (!currentRootActionId) return action.ancestors;
			const index = action.ancestors.findIndex(
				ancestor => ancestor.id === currentRootActionId,
			);

			// +1 removes the currentRootAction; e.g.
			// if we are on the "Set theme" parent action,
			// the UI should not display "Set theme… > Dark"
			// but rather just "Dark"
			return action.ancestors.slice(index + 1);
		}, [action.ancestors, currentRootActionId]);

		return (
			<StyledResultItem
				ref={ref}
				active={active}
			>
				<StyledActionWrapper>
					<Stack
						alignItems="center"
						direction="row"
						display="flex"
						gap={0}
					>
						{ancestors.length > 0 &&
							ancestors.map(ancestor => (
								<React.Fragment key={ancestor.id}>
									<Box
										sx={{
											marginRight: 1,
											opacity: 0.5,
										}}
									>
										{ancestor.name}
									</Box>
									<Box
										sx={{
											marginRight: 1,
										}}
									>
										{direction === DirectionEnum.ltr ? (
											<ArrowRight />
										) : (
											<ArrowLeft />
										)}
									</Box>
								</React.Fragment>
							))}

						{action.icon && (
							<Box sx={{ marginInlineEnd: 1 }}>{action.icon}</Box>
						)}

						<Box>{action.name}</Box>
						{action.subtitle && (
							<Box sx={{ fontSize: 12 }}>{action.subtitle}</Box>
						)}
					</Stack>
				</StyledActionWrapper>
				{action.shortcut?.length ? (
					<StyledShortcutWrapper>
						{action.shortcut.map(shortcut =>
							makeOsRelatedShortcut(shortcut).map(sc => (
								<Kbd
									key={sc}
									size="sm"
								>
									{sc}
								</Kbd>
							)),
						)}
					</StyledShortcutWrapper>
				) : null}
			</StyledResultItem>
		);
	},
);

ResultItem.displayName = 'ResultItem';
