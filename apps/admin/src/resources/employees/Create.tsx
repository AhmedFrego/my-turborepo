import { zodResolver } from '@hookform/resolvers/zod';
import {
	Button,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { appUrl, AuthenticationRoutes } from 'src/constants';
import {
	useCreatePath,
	useEmployeeContext,
	useGetList,
	useNotify,
	useRolesContext,
	useTranslate,
} from 'src/hooks';
import { supabase } from 'src/providers';
import { Logger } from 'src/utils';
import { zod } from 'src/validation';

const schema = zod.object({
	email: zod.string().email(),
	full_name: zod.string().min(3),
	role_id: zod.string().uuid(),
});

type EmployeeFormData = zod.infer<typeof schema>;

export const EmployeeCreate = () => {
	const translate = useTranslate();
	const createPath = useCreatePath();
	const navigate = useNavigate();
	const notify = useNotify();

	const {
		control,
		formState: { errors, isSubmitting },
		handleSubmit,
		setError,
	} = useForm<EmployeeFormData>({ resolver: zodResolver(schema) });

	const { current } = useEmployeeContext();

	const { maxLevel } = useRolesContext();

	const { data: roles } = useGetList('roles', {
		filter: {
			'level@lte': String(maxLevel),
		},
	});

	const handleFormSubmit = async (formData: EmployeeFormData) => {
		const { data, error } = await supabase.functions.invoke<{
			employee_id: string;
		}>('create_employee', {
			body: {
				...formData,
				entity_id: current,
				redirectTo: `${appUrl}/${AuthenticationRoutes.CreatePassword}`,
			},
		});

		if (error) {
			notify(error.message, { type: 'error' });

			setError('root', { message: error.message, type: 'error' });
		} else if (data) {
			navigate(
				createPath({
					id: data.employee_id,
					resource: 'employees',
					type: 'edit',
				}),
			);
		} else {
			Logger.log(formData);
		}
	};

	return (
		<form
			onSubmit={event => {
				handleSubmit(handleFormSubmit)(event).catch(Logger.error);
			}}
		>
			<Controller
				control={control}
				name="full_name"
				render={({ field, fieldState: { error } }) => (
					<TextField
						{...field}
						fullWidth
						error={!!error}
						helperText={translate(error?.message ?? '')}
						label={translate('resources.res_currencies.fields.full_name')}
						variant="outlined"
					/>
				)}
			/>
			<Controller
				control={control}
				name="email"
				render={({ field, fieldState: { error } }) => (
					<TextField
						{...field}
						fullWidth
						error={!!error}
						helperText={translate(error?.message ?? '')}
						label={translate('ra-supabase.auth.email')}
						type="email"
						variant="outlined"
					/>
				)}
			/>
			<FormControl
				fullWidth
				error={!!errors.role_id}
				variant="outlined"
			>
				<InputLabel>
					{translate('resources.join_role_employees.fields.role_id')}
				</InputLabel>
				<Controller
					control={control}
					name="role_id"
					render={({ field }) => (
						<Select
							{...field}
							label={translate('resources.join_role_employees.fields.role_id')}
							value={field.value || ''}
						>
							{roles?.map(role => (
								<MenuItem
									key={role.id}
									value={role.id}
								>
									{role.name}
								</MenuItem>
							))}
						</Select>
					)}
				/>
				{errors.role_id ? (
					<FormHelperText>
						{translate(errors.role_id.message as string)}
					</FormHelperText>
				) : null}
			</FormControl>
			{errors.root ? (
				<FormHelperText>
					{translate(JSON.stringify(errors.root))}
				</FormHelperText>
			) : null}
			<Button
				color="primary"
				disabled={isSubmitting}
				sx={{ mt: 1 }}
				type="submit"
			>
				{translate('ra.action.save')}
			</Button>
		</form>
	);
};
