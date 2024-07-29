import { zodResolver } from '@hookform/resolvers/zod';
import BookmarkIcon from '@mui/icons-material/BookmarkTwoTone';
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
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useNotify, useShortCutContext, useTranslate } from 'src/hooks';
import { Route } from 'src/layout';
import { Logger } from 'src/utils';
import { zod } from 'src/validation';

import { ShortCutIcons } from '../../../layout/shortCut/ShortCutIcons';

const schema = zod.object({
	icon: zod.string(),
	shortCutName: zod.string().min(1, 'Shortcut name is required'),
});

type FormValues = zod.infer<typeof schema>;

export const Bookmark = () => {
	const theme = useTheme();
	const translate = useTranslate();
	const { addShortcut, shortcuts } = useShortCutContext();
	const [openDialog, setOpenDialog] = useState(false);
	const {
		control,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<FormValues>({ resolver: zodResolver(schema) });

	const location = useLocation();
	const notify = useNotify();

	const [searchParams] = useSearchParams();
	const queryParams = Object.fromEntries(searchParams);

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	const onSubmit: SubmitHandler<FormValues> = data => {
		const isUnique = !shortcuts.some(
			item =>
				item.shortCutName === data.shortCutName &&
				item.icon === data.icon &&
				JSON.stringify(item.filters) === JSON.stringify(queryParams),
		);

		if (isUnique) {
			const newData = {
				filters: queryParams,
				icon: data.icon,
				name: location.pathname.replaceAll('/', ''),
				shortCutName: data.shortCutName,
			};

			addShortcut([...shortcuts, newData] as Route[]);
			reset();
			handleCloseDialog();
		} else {
			notify(translate('shortcut.error_duplicated'), {
				anchorOrigin: {
					horizontal: 'center',
					vertical: 'bottom',
				},
				autoHideDuration: 5000,
				type: 'error',
			});
		}
	};

	return (
		<>
			<Button
				size="small"
				startIcon={<BookmarkIcon />}
				variant="text"
				onClick={() => setOpenDialog(true)}
			>
				{translate('shortcut.bookmark')}
			</Button>
			<Dialog
				fullWidth
				open={openDialog}
				onClose={handleCloseDialog}
			>
				<DialogTitle>{translate('shortcut.bookmark')}</DialogTitle>
				<DialogContent>
					<form
						onSubmit={event => {
							handleSubmit(onSubmit)(event).catch(Logger.error);
						}}
					>
						<Controller
							control={control}
							name="shortCutName"
							render={({ field }) => (
								<TextField
									{...field}
									fullWidth
									error={!!errors.shortCutName}
									helperText={errors.shortCutName?.message}
									label={translate('shortcut.shortcut_name')}
									variant="outlined"
								/>
							)}
						/>

						<Controller
							control={control}
							defaultValue={Object.keys(ShortCutIcons)[0]}
							name="icon"
							render={({ field }) => (
								<>
									{Object.entries(ShortCutIcons).map(([key, IconComponent]) => (
										<IconButton
											key={key}
											color={field.value === key ? 'primary' : 'default'}
											style={{
												border: `${theme.spacing(0.25)} solid`,
												borderColor:
													field.value === key
														? theme.palette.primary.main
														: theme.palette.grey[500],
												margin: theme.spacing(0.25),
											}}
											onClick={() => {
												field.onChange(key);
											}}
										>
											<IconComponent />
										</IconButton>
									))}
								</>
							)}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>
						{translate('ra.action.cancel')}
					</Button>
					<Button
						onClick={event => {
							handleSubmit(onSubmit)(event).catch(Logger.error);
						}}
					>
						{translate('ra.action.save')}
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
