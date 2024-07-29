import { RaSupabaseMessages } from 'src/locales';

export const raSupabaseMessages: RaSupabaseMessages = {
	'ra-supabase': {
		auth: {
			confirm_password: 'Confirmez le mot de passe',
			email: 'E-mail',
			forgot_password: 'Mot de passe oublié?',
			password_reset:
				'Votre mot de passe a été réinitialisé.Vous recevrez un e-mail contenant un lien pour vous connecter.',
			reset_password: 'Réinitialiser le mot de passe',
			sign_in_with: 'Connectez-vous avec {{provider}}',
		},
		validation: {
			password_mismatch: 'Les mots de passe ne correspondent pas',
		},
	},
};
