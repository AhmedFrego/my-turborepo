import { Tables } from 'shared-first-tire';

type CustomUser = Partial<Pick<Tables<'employees'>, 'username'>>;

export type SignUpWithPasswordCredentials =
	| {
			/** The user's email address. */
			email: string;
			options?: {
				/** Verification token received when the user completes the captcha on the site. */
				captchaToken?: string;
				/**
				 * A custom data object to store the user's metadata. This maps to the `auth.users.user_metadata` column.
				 *
				 * The `data` should be a JSON object that includes user-specific info, such as their first and last name.
				 */
				data?: CustomUser;
				/** The redirect url embedded in the email link */
				emailRedirectTo?: string;
			};
			/** The user's password. */
			password: string;
	  }
	| {
			options?: {
				/** Verification token received when the user completes the captcha on the site. Requires a configured WhatsApp sender on Twilio */
				captchaToken?: string;
				/** Messaging channel to use (e.g. whatsapp or sms) */
				channel?: 'sms' | 'whatsapp';
				/**
				 * A custom data object to store the user's metadata. This maps to the `auth.users.user_metadata` column.
				 *
				 * The `data` should be a JSON object that includes user-specific info, such as their first and last name.
				 */
				data?: CustomUser;
			};
			/** The user's password. */
			password: string;
			/** The user's phone number. */
			phone: string;
	  };

export type SignInWithPasswordCredentials =
	| ({
			/** The user's email address. */
			email: string;
			options?: {
				/** Verification token received when the user completes the captcha on the site. */
				captchaToken?: string;
			};
			/** The user's password. */
			password: string;
	  } & Pick<CustomUser, 'username'>)
	| {
			options?: {
				/** Verification token received when the user completes the captcha on the site. */
				captchaToken?: string;
				/**
				 * A custom data object to store the user's metadata. This maps to the `auth.users.user_metadata` column.
				 *
				 * The `data` should be a JSON object that includes user-specific info, such as their first and last name.
				 */
				data?: CustomUser;
			};
			/** The user's password. */
			password: string;
			/** The user's phone number. */
			phone: string;
	  };
