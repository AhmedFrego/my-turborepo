import { getByPath, Path } from 'dot-path-value';
import {
	HotkeyCallback,
	useHotkeys as useBaseHotkeys,
} from 'react-hotkeys-hook';
import { Keys, OptionsOrDependencyArray } from 'react-hotkeys-hook/dist/types';
import { HotKeysMap } from 'src/contexts';

import { useHotKeyContext } from './contexts';

export const useHotkeys = <T extends HTMLElement>(
	path: Path<HotKeysMap>,
	callback: HotkeyCallback,
	options?: OptionsOrDependencyArray,
	dependencies?: OptionsOrDependencyArray,
) => {
	const { hotkeys: items, options: globalOptions } = useHotKeyContext();

	const keys = getByPath(
		items,
		[path, 'hotkey'].join('.') as Path<HotKeysMap>,
	) as unknown as Keys;

	useBaseHotkeys<T>(
		keys,
		callback,
		{ ...options, ...globalOptions },
		dependencies,
	);
};
