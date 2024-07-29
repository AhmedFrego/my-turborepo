import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { appUrl, AuthenticationRoutes } from 'src/constants';
import { useTranslate } from 'src/hooks';
import { supabase } from 'src/providers';
import { Logger } from 'src/utils';
import { zod } from 'src/validation';

import { CardContainer } from './CardContainer';
import { FormMassage } from './FormMassage';

interface ForgotPasswordFormProps {}

const schema = zod.object({
	email: zod.string().email(),
});

type FormValues = zod.infer<typeof schema>;

export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = () => {
	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		register,
		setError,
	} = useForm<FormValues>({ resolver: zodResolver(schema) });
	const translate = useTranslate();
	const navigate = useNavigate();

	const handleFormSubmit = async (formData: FormValues) => {
		const { error } = await supabase.auth.resetPasswordForEmail(
			formData.email,
			{
				redirectTo: `${appUrl}/${AuthenticationRoutes.ChangePassword}`,
			},
		);

		if (error) {
			setError('root', { message: error.message, type: 'error' });
		} else {
			setError('root', {
				message: 'Password reset email sent successfully',
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
					{translate('ra-supabase.auth.forgot_password')}
				</Typography>
				<TextField
					{...register('email')}
					fullWidth
					error={!!errors.email}
					helperText={errors.email?.message}
					label={translate('ra.auth.username')}
					variant="outlined"
				/>
				<Button
					fullWidth
					disabled={isSubmitting}
					sx={{ mb: 2, mt: 2 }}
					type="submit"
					variant="contained"
				>
					{translate('ra.auth.send_email')}
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
