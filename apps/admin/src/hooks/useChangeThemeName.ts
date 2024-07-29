import { StoreKeys } from 'src/constants';
import { ThemeName } from 'src/themes';

import { useStore } from './useStore';

export const useChangeThemeName = (defaultValue?: ThemeName) => {
	const [themeName, setThemeName] = useStore<ThemeName>(
		StoreKeys.ThemeName,
		defaultValue,
	);

	return [themeName, setThemeName] as const;
};
