import { useTranslate as useRaTranslate } from 'react-admin';
import { TranslationsPaths } from 'src/locales';

// eslint-disable-next-line @typescript-eslint/ban-types
export type AnyString = {} & string;

export const useTranslate = (): ((
	key: AnyString | TranslationsPaths,
	options?: unknown,
) => string) => useRaTranslate();
