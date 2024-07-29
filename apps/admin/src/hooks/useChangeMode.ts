import { PaletteMode, StoreKeys } from 'src/constants';

import { useStore } from './useStore';

export const useChangeMode = (defaultValue?: PaletteMode) => {
	return useStore<PaletteMode>(StoreKeys.Mode, defaultValue);
};
