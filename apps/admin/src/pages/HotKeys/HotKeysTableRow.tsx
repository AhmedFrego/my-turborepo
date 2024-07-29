import { alpha, Button, TableCell, TableRow, useTheme } from '@mui/material';
import { Keys } from 'react-hotkeys-hook';
import { useTranslate } from 'src/hooks';
import { Kbd } from 'src/layout/command/styled';

interface HotKeysTableRowProps {
	command: string;
	handleOpenModal: () => void;
	hotkey: Keys;
	index: number;
	resetHotkeysMap: () => void;
	scope: string;
	sectionCount: number;
}

export const HotKeysTableRow: React.FC<HotKeysTableRowProps> = props => {
	const {
		command,
		handleOpenModal,
		hotkey,
		index,
		resetHotkeysMap,
		scope,
		sectionCount,
	} = props;
	const translate = useTranslate();
	const theme = useTheme();

	return (
		<TableRow>
			{index === 0 && (
				<TableCell
					rowSpan={sectionCount}
					sx={{
						borderInlineEnd: `${theme.spacing(0.2)} solid ${
							theme.palette.divider
						} !important`,
					}}
				>
					{translate(scope)}
				</TableCell>
			)}
			<TableCell>{translate(command)}</TableCell>
			<TableCell sx={{ maxWidth: 250 }}>
				{String(hotkey)
					.toUpperCase()
					.split(',')
					.map(item => (
						<Kbd
							key={item}
							sx={{
								'&:hover': {
									boxShadow: `0 0 ${theme.spacing(1.25)} ${alpha(theme.palette.primary.main, 0.75)}`,
								},
								cursor: 'pointer',
								display: 'inline-block',
								m: 1,
							}}
							onClick={handleOpenModal}
						>
							{item}
						</Kbd>
					))}
			</TableCell>
			<TableCell>
				<Button
					variant="outlined"
					onClick={() => resetHotkeysMap()}
				>
					{translate('hot_keys.reset')}
				</Button>
			</TableCell>
		</TableRow>
	);
};
