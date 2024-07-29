import ViewWeekIcon from '@mui/icons-material/ViewWeekTwoTone';
import {
	Box,
	Button,
	IconButton,
	Popover,
	Stack,
	styled,
	Switch,
	Theme,
	Tooltip,
	Typography,
	useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslate } from 'src/hooks';
import { TranslationsPaths } from 'src/locales';

import { config } from './config';

const StyledButton = styled(Button, {
	name: 'RaSelectColumnsButton',
	overridesResolver: (_, styles) => styles.root,
})({
	'&.MuiButton-sizeSmall': {
		// fix for icon misalignment on small buttons, see https://github.com/mui/material-ui/pull/30240
		lineHeight: 1.5,
	},
});

export interface SelectorProps {
	setState: React.Dispatch<React.SetStateAction<{ id: string }[]>>;
	state: { id: string }[];
}

export const Selector: React.FC<SelectorProps> = props => {
	const { setState, state } = props;

	const cards = state.map(item => item.id);
	const setCards = (item: string[]) => setState(item.map(id => ({ id })));

	const translate = useTranslate();
	const [anchorElement, setAnchorElement] = useState<
		(EventTarget & HTMLButtonElement) | null
	>(null);
	const isXSmall = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down('sm'),
	);
	const handleClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	): void => {
		setAnchorElement(event.currentTarget);
	};

	const handleClose = (): void => {
		setAnchorElement(null);
	};

	const title = translate('ra.action.select_columns', { _: 'Columns' });

	return (
		<>
			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'end',
				}}
			>
				{isXSmall ? (
					<Tooltip title={title}>
						<IconButton
							aria-label={title}
							color="primary"
							size="large"
							onClick={(event): void => {
								setAnchorElement(event.currentTarget);
							}}
						>
							<ViewWeekIcon />
						</IconButton>
					</Tooltip>
				) : (
					<StyledButton
						size="medium"
						startIcon={<ViewWeekIcon />}
						onClick={handleClick}
					>
						{title}
					</StyledButton>
				)}
			</Box>
			<Popover
				anchorEl={anchorElement}
				anchorOrigin={{
					horizontal: 'center',
					vertical: 'bottom',
				}}
				open={Boolean(anchorElement)}
				transformOrigin={{
					horizontal: 'center',
					vertical: 'top',
				}}
				onClose={handleClose}
			>
				<Stack
					component="ul"
					flexDirection="column"
					my={0}
					p={1}
				>
					{Object.keys(config).map(column => (
						<Box key={column}>
							<Switch
								checked={cards.includes(column)}
								id={`switch_${column}`}
								name={column}
								size="small"
								sx={{ ml: -0.5, mr: 0.5 }}
								title={column}
								onChange={(_, checked) => {
									setCards(
										checked
											? [...cards, column]
											: cards.filter(c => c !== column),
									);
								}}
							/>
							<Typography
								component="span"
								variant="body2"
							>
								{translate(`dashboard_cards.${column}` as TranslationsPaths)}
							</Typography>
						</Box>
					))}
				</Stack>
			</Popover>
		</>
	);
};
