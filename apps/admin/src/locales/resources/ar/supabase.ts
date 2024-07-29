import { RaSupabaseMessages } from 'src/locales';

export const raSupabaseMessages: RaSupabaseMessages = {
	'ra-supabase': {
		auth: {
			confirm_password: 'تأكيد كلمة المرور',
			email: 'بريد إلكتروني',
			forgot_password: 'هل نسيت كلمة السر؟',
			password_reset:
				'تم إعادة تعيين كلمة المرور الخاصة بك.ستصلك رسالة على البريد الإلكتروني تحتوي على رابط لتسجيل الدخول.',
			reset_password: 'إعادة تعيين كلمة المرور',
			sign_in_with: 'تسجيل الدخول باستخدام {{provider}}',
		},
		validation: {
			password_mismatch: 'كلمة المرور غير مطابقة',
		},
	},
};
