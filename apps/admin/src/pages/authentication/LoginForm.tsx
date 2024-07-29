import { zodResolver } from '@hookform/resolvers/zod';
import VisibilityOff from '@mui/icons-material/VisibilityOffTwoTone';
import Visibility from '@mui/icons-material/VisibilityTwoTone';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { logEvent } from 'firebase/analytics';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { To, useNavigate } from 'react-router-dom';
import { LoadingPage } from 'src/components';
import { AuthenticationRoutes } from 'src/constants';
import { analytics } from 'src/firebase';
import { useRedirectParams, useSessionContext, useTranslate } from 'src/hooks';
import { supabase } from 'src/providers';
import { Logger } from 'src/utils';
import { zod } from 'src/validation';

import { CardContainer } from './CardContainer';
import { FormMassage } from './FormMassage';
import { PreferencesForm } from './PreferencesForm';
import { SelectEntityForm } from '../SelectEntityForm';

interface LoginFormProps {}

const schema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(6),
});

type FormValues = zod.infer<typeof schema>;

export const LoginForm: React.FC<LoginFormProps> = () => {
	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		register,
		setError,
	} = useForm<FormValues>({ resolver: zodResolver(schema) });
	const navigate = useNavigate();
	const translate = useTranslate();
	const session = useSessionContext();
	const [showPassword, setShowPassword] = useState(false);
	const redirect = useRedirectParams();

	const handleFormSubmit = async (formData: FormValues) => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: formData.email,
			password: formData.password,
		});

		if (error) {
			setError('root', { message: error.message });
		} else {
			logEvent(analytics, 'login', {
				method: 'email+password',
			});

			Logger.log(data);
		}
	};

	const handleTogglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	if (session.isLoading) return <LoadingPage />;

	return (
		<>
			{session.session?.user.id ? (
				<SelectEntityForm redirect={redirect as To} />
			) : (
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
							{translate('ra.auth.sign_in')}
						</Typography>
						<TextField
							{...register('email')}
							fullWidth
							error={!!errors.email}
							helperText={errors.email?.message}
							label={translate('ra.auth.username')}
							sx={{ mb: 2 }}
							variant="outlined"
						/>
						<TextField
							{...register('password')}
							fullWidth
							InputProps={{
								endAdornment: (
									<IconButton
										edge="end"
										onClick={handleTogglePasswordVisibility}
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								),
							}}
							error={!!errors.password}
							helperText={errors.password?.message}
							label={translate('ra.auth.password')}
							sx={{ mb: 2 }}
							type={showPassword ? 'text' : 'password'}
							variant="outlined"
						/>
						<Button
							fullWidth
							disabled={isSubmitting}
							sx={{ mb: 2 }}
							type="submit"
							variant="contained"
						>
							{translate('ra.auth.sign_in')}
						</Button>

						<Button
							fullWidth
							variant="text"
							onClick={() => {
								navigate(`/${AuthenticationRoutes.ForgetPassword}`);
							}}
						>
							{translate('ra-supabase.auth.forgot_password')}
						</Button>
					</Box>
					<FormMassage massage={errors.root?.message as string} />
					<PreferencesForm />
				</CardContainer>
			)}
		</>
	);
};
