import defaultsDeep from 'lodash/defaultsDeep';
import React, { createContext, useMemo, useState } from 'react';
import { Options } from 'react-hotkeys-hook/dist/types';
import { StoreKeys } from 'src/constants';
import { useStore } from 'src/hooks';
import { TranslationsPaths } from 'src/locales';

import { defaultHotKeysMap, HotKeyActions, HotKeysMap } from './defaultHotKeys';

export interface HotKeysContextItem {
	action?: HotKeyActions;
	command: TranslationsPaths;
	hotkey: string[];
	label?: TranslationsPaths;
	scope: TranslationsPaths;
	source?: 'DEFAULT' | 'USER_DEFINED';
}

export interface HotkeysContextProps {
	hotkeys: HotKeysMap;
	options: Options;
	setHotkeysMap: React.Dispatch<React.SetStateAction<HotKeysMap>>;
	setOptions: React.Dispatch<React.SetStateAction<Options>>;
}

export const HotkeysContext = createContext<HotkeysContextProps>({
	hotkeys: defaultHotKeysMap,
	options: {},
	setHotkeysMap: () => {},
	setOptions: () => {},
});

export interface HotkeysProviderProps {}

export const HotkeysProvider: React.FC<
	React.PropsWithChildren<HotkeysProviderProps>
> = props => {
	const { children } = props;
	const [hotkeysMap, setHotkeysMap] = useStore<HotKeysMap>(
		StoreKeys.HotKeys,
		defaultHotKeysMap,
	);

	const [options, setOptions] = useState<Options>({});

	const value = useMemo<HotkeysContextProps>(
		() => ({
			hotkeys: defaultsDeep(hotkeysMap, defaultHotKeysMap) as HotKeysMap,
			options,
			setHotkeysMap,
			setOptions,
		}),
		[hotkeysMap, options, setHotkeysMap],
	);

	return (
		<HotkeysContext.Provider value={value}>{children}</HotkeysContext.Provider>
	);
};
