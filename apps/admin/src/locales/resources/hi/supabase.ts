import { RaSupabaseMessages } from 'src/locales';

export const raSupabaseMessages: RaSupabaseMessages = {
	'ra-supabase': {
		auth: {
			confirm_password: 'पासवर्ड की पुष्टि कीजिये',
			email: 'ईमेल',
			forgot_password: 'पासवर्ड भूल गए?',
			password_reset:
				'आपका पासवर्ड बदला जा चुका है।आपको एक ईमेल प्राप्त होगा जिसमें लॉग इन करने के लिए एक लिंक होगा।',
			reset_password: 'पासवर्ड रीसेट',
			sign_in_with: '{{provider}} के साथ साइन इन करें',
		},
		validation: {
			password_mismatch: 'सांकेतिक शब्द मेल नहीं खाते',
		},
	},
};
