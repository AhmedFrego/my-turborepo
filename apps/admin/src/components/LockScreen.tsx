import { Box, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PinInput from 'react-pin-input';
import { useIdle } from 'react-use';
import { useTranslate } from 'src/hooks';

interface LockScreenProps {
	idleTime?: number;
}

export const LockScreen: React.FC<LockScreenProps> = props => {
	const { idleTime = 1e3 } = props;

	const isIdle = useIdle(idleTime);
	const translate = useTranslate();
	const [pin, setPin] = useState('');
	const [locked, setLocked] = useState(false);

	useEffect(() => {
		if (isIdle) setLocked(true);
	}, [isIdle]);

	return (
		<Modal open={locked}>
			<Box
				sx={{
					bgcolor: 'background.paper',
					boxShadow: 24,
					left: '50%',
					p: 4,
					position: 'absolute',
					textAlign: 'center',
					top: '50%',
					transform: 'translate(-50%, -50%)',
					width: 300,
				}}
			>
				<Typography
					sx={{ mb: 2 }}
					variant="h6"
				>
					{translate('custom.common.enter_pin')}
				</Typography>
				<PinInput
					autoSelect
					focus
					secret
					initialValue={pin}
					inputMode="number"
					length={4}
					regexCriteria={/^[\w #&+./@-]*$/}
					secretDelay={100}
					style={{
						padding: 1.25,
					}}
					type="numeric"
					onChange={value => {
						setPin(value);
					}}
					onComplete={() => {
						setPin('');
						setLocked(false);
					}}
				/>
			</Box>
		</Modal>
	);
};
