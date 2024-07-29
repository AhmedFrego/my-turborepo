import { RaSupabaseMessages } from 'src/locales';

export const raSupabaseMessages: RaSupabaseMessages = {
	'ra-supabase': {
		auth: {
			confirm_password: 'تأیید رمز عبور',
			email: 'پست الکترونیک',
			forgot_password: 'رمز ورود را فراموش کرده اید؟',
			password_reset:
				'رمز ورود شما تنظیم مجدد شده است.شما یک ایمیل حاوی پیوندی برای ورود به سیستم دریافت خواهید کرد.',
			reset_password: 'بازنشانی رمز عبور',
			sign_in_with: 'با {{provider}} وارد شوید',
		},
		validation: {
			password_mismatch: 'رمزهای ورود مطابقت ندارند',
		},
	},
};
