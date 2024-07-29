import CloseIcon from '@mui/icons-material/CloseTwoTone';
import Print from '@mui/icons-material/LocalPrintshopTwoTone';
import {
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslate } from 'src/hooks';
import { EmployeeID } from 'src/resources/employees/EmployeeID';

export interface PrintIconProps {}

export const PrintIcon: React.FC<PrintIconProps> = () => {
	const translate = useTranslate();
	const theme = useTheme();
	const [openModal, setOpenModal] = useState<boolean>(false);

	const handleCloseDialog = () => {
		setOpenModal(false);
	};

	const handleClick = () => {
		setOpenModal(true);
	};

	return (
		<>
			<IconButton
				color="primary"
				onClick={event => {
					handleClick();
					event.stopPropagation();
				}}
			>
				<Print />
			</IconButton>

			<Dialog
				fullWidth
				open={openModal}
				onClose={handleCloseDialog}
			>
				<DialogTitle>{`${translate('hot_keys.modal_message')}`}</DialogTitle>
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
				<DialogContent>
					<EmployeeID />
				</DialogContent>
			</Dialog>
		</>
	);
};
