import { Options } from 'react-hotkeys-hook/dist/types';
import { defaultHotKeysMap, HotKeysMap } from 'src/contexts/defaultHotKeys';
import { create } from 'zustand';

interface HotkeysStore {
	hotkeys: HotKeysMap;
	options: Options;
	setHotkeysMap: (hotkeysMap: HotKeysMap) => void;
	setOptions: (options: Options) => void;
}

export const useHotkeysStore = create<HotkeysStore>(set => ({
	hotkeys: defaultHotKeysMap,
	options: {},
	setHotkeysMap: hotkeysMap => set({ hotkeys: hotkeysMap }),
	setOptions: options => set({ options }),
}));
