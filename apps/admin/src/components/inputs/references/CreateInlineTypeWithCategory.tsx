import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	TextField,
} from '@mui/material';
import { useState } from 'react';
import { useCreateSuggestionContext } from 'react-admin';
import { Categories } from 'src/constants';
import {
	useCreate,
	useLocale,
	useTranslate,
	UseTranslateProps,
	useTranslations,
} from 'src/hooks';
import { Logger } from 'src/utils';

export const CreateInlineTypeWithCategory = ({
	category,
}: {
	category: Categories;
}) => {
	const { filter, onCancel, onCreate } = useCreateSuggestionContext();
	const [create] = useCreate();
	const [value, setValue] = useState(filter ?? '');
	const translate = useTranslate();
	const translations = useTranslations();
	const { locale } = useLocale();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			await create(
				'types',
				{ data: { category, name: { [locale]: value } } },
				{
					onSuccess: data => {
						setValue('');
						onCreate(data);
					},
				},
			);
		} catch (error) {
			Logger.error(error);
		}
	};

	return (
		<Dialog
			open
			onClose={onCancel}
		>
			<form
				onSubmit={event => {
					handleSubmit(event).catch(Logger.error);
				}}
			>
				<DialogContent sx={{ width: 500 }}>
					<TextField
						autoFocus
						fullWidth
						label={translations([
							[`resources.types.name`, { smart_count: 1 }] as UseTranslateProps,
							[`resources.types.fields.name`] as UseTranslateProps,
						])}
						value={value}
						onChange={event => setValue(event.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button type="submit">{translate('ra.action.save')}</Button>
					<Button onClick={onCancel}>{translate('ra.action.cancel')}</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};
