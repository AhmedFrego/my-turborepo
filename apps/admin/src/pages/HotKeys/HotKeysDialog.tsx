import CloseIcon from '@mui/icons-material/CloseTwoTone';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	TextField,
	useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { Keys, useRecordHotkeys } from 'react-hotkeys-hook';
import { HotKeyActions, HotKeySections, HotKeysMap } from 'src/contexts';
import { useHotKeyContext, useNotify, useTranslate } from 'src/hooks';
import { Logger } from 'src/utils';

import { HotKeyField } from './HotKeyField';
import { Hotkey, OpenModalState } from './HotKeys';

export interface HotKeysDialogProps extends Hotkey {
	command: string;
	hotkey: string[];
	hotkeys: HotKeysMap;
	openModal: null | OpenModalState;
	resetHotkeysMap: () => void;
	setOpenModal: (state: null | OpenModalState) => void;
}

interface HotkeyItem {
	hotkey: string;
}

export interface FormValue {
	hotkeys: HotkeyItem[];
	newItem: string;
}

export const HotKeysDialog: React.FC<HotKeysDialogProps> = props => {
	const {
		command,
		commandName,
		hotkey,
		hotkeys,
		openModal,
		resetHotkeysMap,
		section,
		setOpenModal,
	} = props;

	const [keys, { resetKeys, start, stop }] = useRecordHotkeys();

	const { setHotkeysMap, setOptions } = useHotKeyContext();
	const notify = useNotify();
	const translate = useTranslate();
	const theme = useTheme();

	const { control, handleSubmit, register, reset, watch } = useForm<FormValue>({
		values: {
			hotkeys: hotkey.map((key: string) => ({ hotkey: key.toUpperCase() })),
			newItem: '',
		},
	});

	const { append, fields, remove, update } = useFieldArray({
		control,
		name: 'hotkeys',
	});

	const keyExists = (newKey: string, sections: HotKeySections[]): boolean => {
		const lowerNewKey = newKey.toLowerCase();
		const allExistingKeys: string[] = sections.flatMap(sec =>
			Object.values(hotkeys[sec]).flatMap(details =>
				details.hotkey.map(key => key.toLowerCase()),
			),
		);

		const sortedKeys = allExistingKeys.map(key => [...key].sort().join(''));
		const newKeySorted = [...lowerNewKey].sort().join('');

		return sortedKeys.includes(newKeySorted);
	};

	const onSubmit: SubmitHandler<FormValue> = data => {
		if (!openModal) return;

		const { commandName, section } = openModal;

		const result: Keys =
			typeof data.hotkeys === 'string'
				? data.hotkeys
				: data.hotkeys.map(item => item.hotkey);

		setHotkeysMap((previousMap: HotKeysMap) => ({
			...previousMap,
			[section]: {
				...previousMap[section],
				[commandName]: {
					hotkey: result,
					source: 'USER_DEFINED',
				},
			},
		}));
		resetKeys();
		setOpenModal(null);
		setOptions({ enabled: true });
	};

	const handleError = () => {
		notify(translate('hot_keys.error'), {
			anchorOrigin: {
				horizontal: 'center',
				vertical: 'bottom',
			},
			autoHideDuration: 5000,
			type: 'error',
		});
		resetKeys();
	};

	const handleAddNewItem = () => {
		const newItemValue: string = watch('newItem');

		if (newItemValue !== '') {
			if (
				keyExists(newItemValue, [
					section,
					HotKeySections.global,
					HotKeySections.command,
				])
			) {
				handleError();
			} else {
				append({ hotkey: newItemValue }, { shouldFocus: false });
				resetKeys();
			}
		}
	};

	const handleCloseDialog = () => {
		setOpenModal(null);
		resetKeys();
		reset();
	};

	return (
		<Dialog
			fullWidth
			open={
				openModal !== null &&
				openModal.section === section &&
				openModal.commandName === (commandName as HotKeyActions)
			}
			onClose={handleCloseDialog}
		>
			<DialogTitle>{`${translate('hot_keys.modal_message')} - ${translate(
				command,
			)}`}</DialogTitle>
			<IconButton
				aria-label="close"
				sx={{
					color: theme.palette.grey[500],
					position: 'absolute',
					right: 8,
					top: 8,
				}}
				onClick={handleCloseDialog}
			>
				<CloseIcon />
			</IconButton>
			<DialogContent sx={{ padding: `0 1.5rem` }}>
				<Box
					sx={{
						border: `${theme.spacing(0.2)} solid ${theme.palette.primary.main}`,
						direction: 'initial',
						padding: `0.7rem`,
					}}
				>
					<form
						onSubmit={event => {
							handleSubmit(onSubmit)(event).catch(Logger.error);
						}}
					>
						{fields.map((field, index) => (
							<HotKeyField
								key={index}
								field={field}
								fieldsLength={fields.length}
								handleError={handleError}
								index={index}
								keyExists={keyExists}
								remove={remove}
								section={section}
								update={update}
							/>
						))}

						<Box
							sx={{ alignItems: 'center', display: 'flex', marginTop: '1rem' }}
						>
							<TextField
								fullWidth
								label={translate('hot_keys.new_hotkey')}
								sx={{ marginInlineEnd: 1 }}
								value={[...keys].join(' + ').toUpperCase()}
								variant="outlined"
								onFocus={() => {
									start();
								}}
								{...register('newItem', {
									onBlur: () => {
										stop();
									},
								})}
							/>

							<Button
								variant="outlined"
								onClick={() => handleAddNewItem()}
							>
								{translate('ra.action.add')}
							</Button>
						</Box>
					</form>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleCloseDialog}>
					{translate('ra.action.close')}
				</Button>
				<Button
					onClick={() => {
						resetHotkeysMap();
						handleCloseDialog();
					}}
				>
					{translate('hot_keys.reset')}
				</Button>
				<Button
					type="submit"
					onClick={event => {
						handleSubmit(onSubmit)(event).catch(Logger.error);
					}}
				>
					{translate('ra.action.save')}
				</Button>
			</DialogActions>
		</Dialog>
	);
};
