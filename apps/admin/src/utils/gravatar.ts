import md5 from 'md5';
import { LiteralUnion } from 'type-fest';

export interface Options {
	/**
	 * [Image](https://en.gravatar.com/site/implement/images/#default-image) to return if the identifier didn't match any Gravatar profile.
	 * Either a custom URL or
	 * [`404`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=404),
	 * [`mm`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=mm),
	 * [`identicon`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=identicon),
	 * [`monsterid`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=monsterid),
	 * [`wavatar`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=wavatar),
	 * [`retro`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=retro),
	 * [`blank`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=blank).
	 *
	 * @default 'https://gravatar.com/avatar/00000000000000000000000000000000'
	 */
	readonly default?: LiteralUnion<
		'404' | 'blank' | 'identicon' | 'mm' | 'monsterid' | 'retro' | 'wavatar',
		string
	>;

	/**
	 * Allowed [rating](https://en.gravatar.com/site/implement/images/#rating) of the image.
	 *
	 * @default 'g'
	 */
	readonly rating?: 'g' | 'pg' | 'r' | 'x';

	/**
	 * [Size](https://en.gravatar.com/site/implement/images/#size) of the image. Values: `1..2048`.
	 *
	 * @default 80
	 */
	readonly size?: number;
}

const validateEmail = (email: string) =>
	/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

export const gravatarUrl = (identifier: string, options?: Options) => {
	if (!identifier) {
		throw new Error('Please specify an identifier, such as an email address');
	}

	if (validateEmail(identifier.toLowerCase())) {
		identifier = identifier.toLowerCase().trim();
	}

	const baseUrl = new URL('https://gravatar.com/avatar/');

	baseUrl.pathname += md5(identifier);
	baseUrl.search = new URLSearchParams(
		options as Record<string, string>,
	).toString();

	return baseUrl.toString();
};
