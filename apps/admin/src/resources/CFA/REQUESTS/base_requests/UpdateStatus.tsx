import CloseIcon from '@mui/icons-material/CloseTwoTone';
import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { RaRecord, RecordRepresentation } from 'react-admin';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { useRecordContext, useResourceContext, useTranslate } from 'src/hooks';
import { RequestPublicTables, RequestStatuses, Tables } from 'src/types';
import { Logger, statusToColor, statusToIcon } from 'src/utils';
import { PascalCase } from 'type-fest';

import { useUpdateStatus } from './useUpdateStatus';

interface Inputs {
	message: string;
}

export type OnRequestUpdateHandler<
	T extends RequestPublicTables = RequestPublicTables,
> = (record: Tables<T>) => Promise<void> | void;

export type UpdateRequestHandlers<
	T extends RequestPublicTables = RequestPublicTables,
> = Record<
	`on${PascalCase<keyof typeof RequestStatuses>}`,
	OnRequestUpdateHandler<T>
>;

export interface UpdateStatusProps<
	T extends RequestPublicTables = RequestPublicTables,
> {
	color?: LoadingButtonProps['color'];
	new_status_input: RequestStatuses;
	onUpdate?: OnRequestUpdateHandler<T>;
}

export const UpdateStatus = <
	T extends RequestPublicTables = RequestPublicTables,
>(
	props: React.PropsWithChildren<UpdateStatusProps<T>>,
) => {
	const { children, color, new_status_input, onUpdate } = props;

	const translate = useTranslate();
	const updateStatus = useUpdateStatus();
	const record = useRecordContext<Tables<T>>();
	const resource = useResourceContext();

	const [open, setOpen] = useState(false);

	const handleClickOpen = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		setOpen(true);

		event.stopPropagation();
	};

	const handleClose = () => {
		setOpen(false);
	};

	const {
		formState: { isSubmitting },
		handleSubmit,
		register,
	} = useFormContext<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = ({
		message: change_message,
		...rest
	}) => {
		if (!record) return;

		updateStatus({
			change_message,
			new_status_input,
			request_type: record.type,
		})
			.then(async () => {
				handleClose();

				try {
					await onUpdate?.({ ...record, ...rest });
				} catch (error) {
					Logger.error(error);
				}
			})
			.catch(Logger.error);
	};

	const Icon = statusToIcon(new_status_input);

	return (
		<>
			<LoadingButton
				color={color ?? statusToColor(new_status_input)}
				startIcon={<Icon />}
				variant="contained"
				onClick={handleClickOpen}
			>
				{translate(`custom.action.${new_status_input}`)}
			</LoadingButton>

			<Dialog
				fullWidth
				open={open}
				onClose={handleClose}
			>
				<DialogTitle>
					<RecordRepresentation
						record={record as RaRecord}
						resource={resource}
					/>
				</DialogTitle>
				<IconButton
					aria-label="close"
					sx={{
						color: theme => theme.palette.grey[500],
						position: 'absolute',
						right: 8,
						top: 8,
					}}
					onClick={() => handleClose()}
				>
					<CloseIcon />
				</IconButton>
				<DialogContent dividers>
					<TextField
						autoFocus
						fullWidth
						multiline
						id="message"
						label={translate(`custom.action.${new_status_input}`)}
						margin="dense"
						variant="outlined"
						{...register('message')}
					/>
					{children}
				</DialogContent>
				<DialogActions>
					<LoadingButton
						color="error"
						loading={isSubmitting}
						onClick={handleClose}
					>
						{translate('ra.action.cancel')}
					</LoadingButton>
					<LoadingButton
						color="primary"
						loading={isSubmitting}
						type="submit"
						onClick={event => {
							handleSubmit(onSubmit)(event).catch(Logger.error);
						}}
					>
						{translate('ra.action.confirm')}
					</LoadingButton>
				</DialogActions>
			</Dialog>
		</>
	);
};
