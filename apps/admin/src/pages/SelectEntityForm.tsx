import { zodResolver } from '@hookform/resolvers/zod';
import {
	Box,
	Button,
	FormControlLabel,
	List,
	ListItem,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { To, useNavigate } from 'react-router-dom';
import { LoadingPage } from 'src/components';
import { useEmployeeContext, useTranslate } from 'src/hooks';
import { supabase } from 'src/providers';
import { Logger } from 'src/utils';
import { zod } from 'src/validation';

import { CardContainer, FormMassage } from './authentication';

type FormValues = zod.infer<typeof schema>;

export interface SelectEntityFormProps {
	redirect: null | To;
}

const schema = zod.object({
	selectedEntity: zod.string(),
});

const handleLogout = () => {
	supabase.auth.signOut().catch(Logger.error);
};

export const SelectEntityForm: React.FC<SelectEntityFormProps> = props => {
	const { redirect } = props;
	const { entities, setCurrent: setStoreCurrent } = useEmployeeContext();

	const translate = useTranslate();
	const navigate = useNavigate();
	const {
		control,
		formState: { errors },
		handleSubmit,
		setError,
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
	});

	const handleFormSubmit = (formData: FormValues) => {
		if (formData.selectedEntity) {
			setStoreCurrent(formData.selectedEntity);
			navigate(redirect as To);
		} else {
			setError('root', { message: translate('custom.choose_one_entity') });
		}
	};

	if (!entities) return <LoadingPage />;

	if (entities?.length === 0)
		return (
			<CardContainer>
				<Typography
					textAlign="center"
					variant="h6"
				>
					{translate('custom.common.no_entity_found')}
				</Typography>
				<Button
					sx={{ mt: 2, width: '100%' }}
					variant="contained"
					onClick={() => handleLogout()}
				>
					{translate('ra.auth.logout')}
				</Button>
			</CardContainer>
		);

	if (entities.length === 1) {
		setStoreCurrent(entities[0].entity_id);
		navigate(redirect as To);
	}

	return (
		<CardContainer>
			<Typography variant="h4">{translate('custom.select_entity')}</Typography>
			<List sx={{ justifyContent: 'flex-start' }}>
				{entities?.map(entity => {
					if (!entity.entities) return null;

					const { id, name } = entity.entities;

					return (
						<ListItem key={id}>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								name="radio-buttons-group"
							>
								<Controller
									control={control}
									name="selectedEntity"
									render={({ field: { onChange, value } }) => (
										<>
											<FormControlLabel
												checked={value === id}
												control={<Radio />}
												label={name}
												value={id}
												onChange={onChange}
											/>
										</>
									)}
								/>
							</RadioGroup>
						</ListItem>
					);
				})}
			</List>
			<Box>
				<Button
					fullWidth
					variant="contained"
					onClick={event => {
						handleSubmit(handleFormSubmit)(event).catch(Logger.error);
					}}
				>
					{translate('ra.action.save')}
				</Button>
			</Box>
			<FormMassage
				massage={errors.selectedEntity?.message as string}
				type="error"
			/>
		</CardContainer>
	);
};
