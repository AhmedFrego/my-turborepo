import RemoveIcon from '@mui/icons-material/RemoveCircleTwoTone';
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { noCase } from 'change-case';
import {
	Controller,
	SubmitHandler,
	useFieldArray,
	useForm,
} from 'react-hook-form';
import { useNotify, useShortCutContext, useTranslate } from 'src/hooks';
import { AdminServices } from 'src/resources';
import { PublicTables } from 'src/types';
import { Logger } from 'src/utils';

import { ShortCutIcons } from './ShortCutIcons';

export interface Route {
	filters: string;
	icon: string;
	name: PublicTables;
	shortCutName: string;
}

export interface ShortCutDialogProps {
	openModal: boolean;
	setOpenModal: (state: boolean) => void;
}

export const ShortCutDialog: React.FC<ShortCutDialogProps> = props => {
	const { openModal, setOpenModal } = props;
	const { addShortcut, shortcuts } = useShortCutContext();
	const translate = useTranslate();
	const theme = useTheme();
	const notify = useNotify();

	const {
		control,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		values: {
			shortcuts,
		},
	});

	const { append, fields, remove } = useFieldArray({
		control,
		name: 'shortcuts',
	});

	const handleCloseDialog = () => {
		setOpenModal(false);
		reset();
	};

	const Routes = Object.values(AdminServices).filter(
		item =>
			!item.name.startsWith('join_') &&
			!item.name.startsWith('base_') &&
			!item.name.startsWith('res_'),
	);

	const onSubmit: SubmitHandler<{ shortcuts: Route[] }> = data => {
		const uniqueShortcuts = new Set(
			data.shortcuts.map(element => JSON.stringify(element)),
		);

		if (uniqueShortcuts.size === data.shortcuts.length) {
			addShortcut(data.shortcuts);
			handleCloseDialog();
		} else {
			const duplicateIndexes: number[] = [];

			for (const [index, element] of data.shortcuts.entries()) {
				const stringifiedElement = JSON.stringify(element);

				if (!uniqueShortcuts.delete(stringifiedElement)) {
					duplicateIndexes.push(index + 1);
				}
			}

			notify(`${translate('shortcut.error')} ${duplicateIndexes.join(', ')}`, {
				anchorOrigin: {
					horizontal: 'center',
					vertical: 'bottom',
				},
				autoHideDuration: 5000,
				type: 'error',
			});
		}
	};

	const requiredMessage = 'ra.validation.required';

	return (
		<Dialog
			fullWidth
			open={openModal}
			onClose={handleCloseDialog}
		>
			<DialogTitle>{translate('shortcut.shortcut')}</DialogTitle>
			<DialogContent sx={{ padding: `0 1.5rem` }}>
				<form
					onSubmit={event => {
						handleSubmit(onSubmit)(event).catch(Logger.error);
					}}
				>
					{fields.map((field, index) => (
						<Box
							key={field.id}
							display="flex"
							marginBottom={2}
						>
							<Typography
								fontWeight="600"
								sx={{
									marginInlineEnd: theme.spacing(1),
									marginTop: theme.spacing(1),
								}}
								variant="h6"
							>
								{`${index + 1}-`}
							</Typography>

							<Box width="100%">
								<Grid
									container
									spacing={1}
								>
									<Grid
										item
										xs={6}
									>
										<Controller
											control={control}
											name={`shortcuts.${index}.shortCutName`}
											render={({ field }) => (
												<TextField
													{...field}
													fullWidth
													error={!!errors.shortcuts?.[index]?.shortCutName}
													helperText={
														errors.shortcuts?.[index]?.shortCutName
															? translate(requiredMessage)
															: null
													}
													label={translate('shortcut.shortcut_name')}
													variant="outlined"
												/>
											)}
											rules={{
												required: true,
											}}
										/>
									</Grid>
									<Grid
										item
										xs={6}
									>
										<Controller
											control={control}
											name={`shortcuts.${index}.name`}
											render={({ field }) => (
												<Autocomplete
													{...field}
													getOptionLabel={option =>
														option.name ? noCase(option.name) : noCase(option)
													}
													id={`tags-outlined-${index}`}
													options={Routes}
													renderInput={params => (
														<TextField
															error={!!errors.shortcuts?.[index]?.name}
															helperText={
																errors.shortcuts?.[index]?.name
																	? translate(requiredMessage)
																	: null
															}
															{...params}
															label={translate('shortcut.name')}
															variant="outlined"
														/>
													)}
													onChange={(_, newValue) =>
														field.onChange(newValue?.name)
													}
												/>
											)}
											rules={{
												required: true,
											}}
										/>
									</Grid>
								</Grid>

								<Controller
									control={control}
									defaultValue={Object.keys(ShortCutIcons)[0]}
									name={`shortcuts.${index}.icon`}
									render={({ field }) => (
										<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
											{Object.entries(ShortCutIcons).map(
												([key, IconComponent]) => (
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
												),
											)}
										</Box>
									)}
									rules={{
										required: true,
									}}
								/>
							</Box>
							<IconButton
								color="error"
								sx={{
									height: '100%',
									marginInlineStart: theme.spacing(1),
									marginTop: theme.spacing(1),
									p: 0,
								}}
								onClick={() => remove(index)}
							>
								<RemoveIcon />
							</IconButton>
						</Box>
					))}
				</form>
			</DialogContent>
			<DialogActions>
				<Box
					sx={{
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
					}}
				>
					<Button onClick={() => append({} as Route)}>
						{translate('shortcut.add_new_shortcut')}
					</Button>
					<Box>
						<Button onClick={handleCloseDialog}>
							{translate('ra.action.close')}
						</Button>
						<Button
							onClick={event => {
								handleSubmit(onSubmit)(event).catch(Logger.error);
							}}
						>
							{translate('ra.action.save')}
						</Button>
					</Box>
				</Box>
			</DialogActions>
		</Dialog>
	);
};
