import { zodResolver } from '@hookform/resolvers/zod';
import VisibilityOff from '@mui/icons-material/VisibilityOffTwoTone';
import Visibility from '@mui/icons-material/VisibilityTwoTone';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthenticationRoutes } from 'src/constants';
import { useTranslate } from 'src/hooks';
import { supabase } from 'src/providers';
import { Logger } from 'src/utils';
import { zod } from 'src/validation';

import { CardContainer } from './CardContainer';
import { FormMassage } from './FormMassage';

interface ChangePasswordFormProps {}

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = () => {
	const translate = useTranslate();

	const schema = zod
		.object({
			new_password: zod.string().min(6),
			new_password_confirmation: zod.string().min(6),
		})
		.refine(
			({ new_password, new_password_confirmation }) =>
				new_password === new_password_confirmation,
			{
				message: translate('ra.validation.passwords_do_not_match'),
				path: ['new_password_confirmation'],
			},
		);

	type FormValues = zod.infer<typeof schema>;

	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		register,
		setError,
	} = useForm<FormValues>({ resolver: zodResolver(schema) });
	const navigate = useNavigate();
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmationPassword, setShowConfirmationPassword] =
		useState(false);

	const handleToggleNewPasswordVisibility = () => {
		setShowNewPassword(!showNewPassword);
	};

	const handleToggleConfirmationPasswordVisibility = () => {
		setShowConfirmationPassword(!showConfirmationPassword);
	};

	const handleFormSubmit = async (formData: FormValues) => {
		const { error } = await supabase.auth.updateUser({
			password: formData.new_password,
		});

		if (error) {
			setError('root', { message: error.message, type: 'error' });
		} else {
			setError('root', {
				message: 'Password updated successfully',
				type: 'success',
			});
		}
	};

	return (
		<CardContainer>
			<Box
				component="form"
				onSubmit={event => {
					handleSubmit(handleFormSubmit)(event).catch(Logger.error);
				}}
			>
				<Typography
					sx={{ mb: 2 }}
					variant="h4"
				>
					{translate('ra.auth.change_password')}
				</Typography>
				<TextField
					{...register('new_password')}
					fullWidth
					InputProps={{
						endAdornment: (
							<IconButton
								edge="end"
								onClick={handleToggleNewPasswordVisibility}
							>
								{showNewPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						),
					}}
					error={!!errors.new_password}
					helperText={errors.new_password?.message}
					label={translate('ra.auth.new_password')}
					sx={{ mb: 2 }}
					type={showNewPassword ? 'text' : 'password'}
					variant="outlined"
				/>
				<TextField
					{...register('new_password_confirmation')}
					fullWidth
					InputProps={{
						endAdornment: (
							<IconButton
								edge="end"
								onClick={handleToggleConfirmationPasswordVisibility}
							>
								{showConfirmationPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						),
					}}
					error={!!errors.new_password_confirmation}
					helperText={errors.new_password_confirmation?.message}
					label={translate('ra.auth.new_password_confirmation')}
					type={showConfirmationPassword ? 'text' : 'password'}
					variant="outlined"
				/>
				<Button
					fullWidth
					disabled={isSubmitting}
					sx={{ mb: 2, mt: 2 }}
					type="submit"
					variant="contained"
				>
					{translate('ra.auth.change_password')}
				</Button>

				<Button
					fullWidth
					variant="text"
					onClick={() => {
						navigate(`/${AuthenticationRoutes.Login}`);
					}}
				>
					{translate('ra.auth.sign_in')}
				</Button>
			</Box>
			<FormMassage
				massage={errors.root?.message as string}
				type={errors.root?.type === 'error' ? 'error' : 'success'}
			/>
		</CardContainer>
	);
};
