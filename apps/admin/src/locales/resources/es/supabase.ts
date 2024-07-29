import { RaSupabaseMessages } from 'src/locales';

export const raSupabaseMessages: RaSupabaseMessages = {
	'ra-supabase': {
		auth: {
			confirm_password: 'Confirmar Contraseña',
			email: 'Correo electrónico',
			forgot_password: '¿Has olvidado tu contraseña?',
			password_reset:
				'Tu contraseña ha sido restablecida.Recibirá un correo electrónico que contiene un enlace para iniciar sesión.',
			reset_password: 'Restablecer la contraseña',
			sign_in_with: 'Iniciar sesión con {{proveedor}}',
		},
		validation: {
			password_mismatch: 'Las contraseñas no coinciden',
		},
	},
};
