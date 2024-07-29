import {
	Box,
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import {
	defaultHotKeysMap,
	HotKeyActions,
	HotKeySections,
	HotKeysMap,
} from 'src/contexts';
import { useHotKeyContext, useTranslate } from 'src/hooks';

import { HotKeysDialog } from './HotKeysDialog';
import { HotKeysTableRow } from './HotKeysTableRow';

export interface OpenModalState {
	commandName: HotKeyActions;
	section: HotKeySections;
}

export interface HotKeysProps {}

export interface Hotkey {
	commandName: string;
	section: HotKeySections;
}

export const HotKeys: React.FC<React.PropsWithChildren<HotKeysProps>> = () => {
	const translate = useTranslate();
	const theme = useTheme();

	const { hotkeys: appHotkeys, setHotkeysMap, setOptions } = useHotKeyContext();
	const [openModal, setOpenModal] = useState<null | OpenModalState>(null);

	const handleOpenModal = (
		section: HotKeySections,
		commandName: HotKeyActions,
	): void => {
		setOpenModal({ commandName, section });
		setOptions({ enabled: false });
	};

	function resetHotkeysMap(
		section: HotKeySections,
		commandName: HotKeyActions,
	): void {
		const sectionCommands = defaultHotKeysMap[section][commandName];

		setHotkeysMap((previousMap: HotKeysMap) => ({
			...previousMap,
			[section]: {
				...previousMap[section],
				[commandName]: {
					hotkey: sectionCommands?.hotkey,
					source: null,
				},
			},
		}));
	}

	return (
		<>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
				<Button
					variant="outlined"
					onClick={() => setHotkeysMap(defaultHotKeysMap)}
				>
					{translate('hot_keys.reset_all_hot_keys')}
				</Button>
			</Box>
			<TableContainer component={Paper}>
				<Table
					aria-label="simple table"
					sx={{ minWidth: 650 }}
				>
					<TableHead sx={{ background: theme.palette.background.paper }}>
						<TableRow>
							<TableCell
								sx={{
									borderInlineEnd: `${theme.spacing(0.2)} solid ${
										theme.palette.divider
									} !important`,
								}}
							>
								{translate('hot_keys.section')}
							</TableCell>
							<TableCell>{translate('hot_keys.command')}</TableCell>
							<TableCell>{translate('hot_keys.hotKey')}</TableCell>
							<TableCell>{translate('hot_keys.reset')}</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{appHotkeys
							? Object.entries(appHotkeys).map(([section, sectionItems]) => {
									const sectionCount = Object.keys(sectionItems).length;

									return (
										<React.Fragment key={section}>
											{Object.entries(sectionItems).map(
												([commandName, itemKey], index) => {
													const { command, hotkey, scope } = itemKey;

													return (
														<React.Fragment key={commandName}>
															<HotKeysTableRow
																command={command}
																handleOpenModal={() =>
																	handleOpenModal(
																		section as HotKeySections,
																		commandName as HotKeyActions,
																	)
																}
																hotkey={hotkey}
																index={index}
																resetHotkeysMap={() => {
																	resetHotkeysMap(
																		section as HotKeySections,
																		commandName as HotKeyActions,
																	);
																}}
																scope={scope}
																sectionCount={sectionCount}
															/>
															<HotKeysDialog
																command={command}
																commandName={commandName}
																hotkey={hotkey}
																hotkeys={appHotkeys}
																openModal={openModal}
																resetHotkeysMap={() => {
																	resetHotkeysMap(
																		section as HotKeySections,
																		commandName as HotKeyActions,
																	);
																}}
																section={section as HotKeySections}
																setOpenModal={setOpenModal}
															/>
														</React.Fragment>
													);
												},
											)}
										</React.Fragment>
									);
								})
							: null}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
