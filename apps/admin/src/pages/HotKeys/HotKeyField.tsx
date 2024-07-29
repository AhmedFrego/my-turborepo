import Remove from '@mui/icons-material/RemoveCircleOutlineTwoTone';
import { Box, TextField } from '@mui/material';
import React from 'react';
import { UseFieldArrayReturn } from 'react-hook-form';
import { useRecordHotkeys } from 'react-hotkeys-hook';
import { HotKeySections } from 'src/contexts';

import { FormValue } from './HotKeysDialog';

export interface HotKeyFieldProps
	extends Pick<UseFieldArrayReturn<FormValue>, 'remove' | 'update'> {
	field: {
		hotkey: string;
		id: string;
	};
	fieldsLength: number;
	handleError: () => void;
	index: number;
	keyExists: (newKey: string, sections: HotKeySections[]) => boolean;
	section: HotKeySections;
}

export const HotKeyField: React.FC<HotKeyFieldProps> = props => {
	const {
		field,
		fieldsLength,
		handleError,
		index,
		keyExists,
		remove,
		section,
		update,
	} = props;

	const [keys, { resetKeys, start, stop }] = useRecordHotkeys();

	return (
		<Box
			key={field.id}
			sx={{ alignItems: 'center', display: 'flex' }}
		>
			<TextField
				fullWidth
				label={field.hotkey.toUpperCase() ?? ''}
				value={[...keys].join(' + ').toUpperCase()}
				variant="outlined"
				onBlur={event => {
					if (event.target.value !== '') {
						if (
							keyExists(event.target.value, [
								section,
								HotKeySections.global,
								HotKeySections.command,
							])
						) {
							handleError();
							resetKeys();
						} else {
							update(index, { hotkey: event.target.value });
							resetKeys();
						}
					}
					stop();
				}}
				onFocus={() => {
					start();
				}}
			/>

			{fieldsLength > 1 && (
				<Remove
					sx={{ cursor: 'pointer', marginInlineStart: 1 }}
					onClick={() => remove(index)}
				/>
			)}
		</Box>
	);
};
