import { zodResolver } from '@hookform/resolvers/zod';
import VisibilityOff from '@mui/icons-material/VisibilityOffTwoTone';
import Visibility from '@mui/icons-material/VisibilityTwoTone';
import { Box, Button, IconButton, TextField } from '@mui/material';
import { canAccess } from '@react-admin/ra-rbac';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { adminBaseName } from 'src/constants';
import { usePermissions, useTranslate } from 'src/hooks';
import { supabase } from 'src/providers';
import { Logger } from 'src/utils';
import { zod } from 'src/validation';

import { CardContainer } from './CardContainer';
import { FormMassage } from './FormMassage';

const schema = zod.object({
	password: zod.string().min(6),
});

type FormValues = zod.infer<typeof schema>;

interface CreatePasswordFormProps {}

export const CreatePasswordForm: React.FC<CreatePasswordFormProps> = () => {
	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		register,
		setError,
	} = useForm<FormValues>({ resolver: zodResolver(schema) });
	const translate = useTranslate();
	const [showPassword, setShowPassword] = useState(false);
	const { permissions } = usePermissions();
	const navigate = useNavigate();

	const handleTogglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleFormSubmit = async (formData: FormValues) => {
		console.log(permissions);
		const { error } = await supabase.auth.updateUser({
			password: formData.password,
		});

		if (error) {
			setError('root', { message: error.message, type: 'error' });
		} else {
			if (
				permissions &&
				canAccess({
					action: 'access',
					permissions,
					resource: 'dashboard',
				})
			) {
				navigate(adminBaseName);
			}
			setError('root', {
				message: 'Password create successfully ! open app mobile',
				type: 'success',
			});
		}
	};

	return (
		<CardContainer>
			<Box
				component="form"
				sx={{ mt: 2 }}
				onSubmit={event => {
					handleSubmit(handleFormSubmit)(event).catch(Logger.error);
				}}
			>
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
					helperText={translate(errors.password?.message as string)}
					label={translate('ra.auth.create_password')}
					sx={{ mb: 2 }}
					type={showPassword ? 'text' : 'password'}
					variant="outlined"
				/>
				<Button
					fullWidth
					disabled={isSubmitting}
					type="submit"
					variant="contained"
				>
					{translate('ra.auth.create_password')}
				</Button>
				<FormMassage
					massage={errors.root?.message as string}
					type={errors.root?.type === 'error' ? 'error' : 'success'}
				/>
			</Box>
		</CardContainer>
	);
};
