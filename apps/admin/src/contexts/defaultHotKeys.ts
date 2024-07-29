import { Key } from 'ts-key-enum';

import { HotKeysContextItem } from './HotkeysContext';

const getHotKey = <T>(...keys: T[]) => keys.join(' + ');

export enum HotKeySections {
	command = 'command',
	edit = 'edit',
	global = 'global',
	list = 'list',
	show = 'show',
}

export enum HotKeyActions {
	CREATE_NEW = 'CREATE_NEW',
	EDIT_ITEM = 'EDIT_ITEM',
	GO_BACK = 'GO_BACK',
	GO_HOME = 'GO_HOME',
	GO_TO_THE_NEXT_ITEM = 'GO_TO_THE_NEXT_ITEM',
	GO_TO_THE_PREVIOUS_ITEM = 'GO_TO_THE_PREVIOUS_ITEM',
	OPEN_GLOBAL_SEARCH = 'OPEN_GLOBAL_SEARCH',
	PROFILE = 'PROFILE',
	SEARCH_MENU_FOCUS = 'SEARCH_MENU_FOCUS',
	SUBMIT_ITEM = 'SUBMIT_ITEM',
	TOGGLE_COMMAND = 'TOGGLE_COMMAND',
	TOGGLE_MENU = 'TOGGLE_MENU',
	TOGGLE_MODE = 'TOGGLE_MODE',
}

export type HotKeysMap = {
	[K in HotKeySections]: { [A in HotKeyActions]?: HotKeysContextItem };
};

const COMMAND = 'hot_keys.scopes.command';
const EDIT_ITEM = 'ra.action.edit';
const GLOBAL_SCOPE = 'hot_keys.scopes.global';
const SHOW_ITEM = 'ra.action.show';
const LIST_ITEM = 'ra.action.list';

export const defaultHotKeysMap: HotKeysMap = {
	[HotKeySections.command]: {
		[HotKeyActions.TOGGLE_COMMAND]: {
			command: 'hot_keys.toggle_palette',
			hotkey: [getHotKey(Key.Shift, 'k')],
			scope: COMMAND,
		},
	},
	[HotKeySections.edit]: {
		[HotKeyActions.GO_TO_THE_NEXT_ITEM]: {
			command: 'navigation.next_item',
			hotkey: [getHotKey(Key.Shift, 'n')],
			scope: EDIT_ITEM,
		},
		[HotKeyActions.GO_TO_THE_PREVIOUS_ITEM]: {
			command: 'navigation.previous_item',
			hotkey: [getHotKey(Key.Shift, 'p')],
			scope: EDIT_ITEM,
		},
		[HotKeyActions.SUBMIT_ITEM]: {
			command: 'ra.action.save',
			hotkey: [getHotKey(Key.Shift, 's')],
			scope: EDIT_ITEM,
		},
	},
	[HotKeySections.global]: {
		[HotKeyActions.GO_BACK]: {
			command: 'hot_keys.back',
			hotkey: [getHotKey(Key.Shift, 'b')],
			scope: GLOBAL_SCOPE,
		},
		[HotKeyActions.GO_HOME]: {
			command: 'hot_keys.home',
			hotkey: [getHotKey(Key.Shift, 'h')],
			scope: GLOBAL_SCOPE,
		},
		[HotKeyActions.PROFILE]: {
			command: 'hot_keys.profile',
			hotkey: [getHotKey(Key.Shift, 'r')],
			scope: GLOBAL_SCOPE,
		},

		[HotKeyActions.TOGGLE_MENU]: {
			command: 'hot_keys.toggle_menu',
			hotkey: [getHotKey(Key.Shift, 'm')],
			scope: GLOBAL_SCOPE,
		},
		[HotKeyActions.TOGGLE_MODE]: {
			command: 'ra.action.toggle_theme',
			hotkey: [getHotKey(Key.Shift, 't')],
			scope: GLOBAL_SCOPE,
		},
	},
	[HotKeySections.list]: {
		[HotKeyActions.CREATE_NEW]: {
			command: 'ra.action.create',
			hotkey: [getHotKey(Key.Shift, 'n')],
			scope: LIST_ITEM,
		},
	},
	[HotKeySections.show]: {
		[HotKeyActions.EDIT_ITEM]: {
			command: EDIT_ITEM,
			hotkey: [getHotKey(Key.Shift, 'e')],
			scope: SHOW_ITEM,
		},
		[HotKeyActions.GO_TO_THE_NEXT_ITEM]: {
			command: 'navigation.next_item',
			hotkey: [getHotKey(Key.Shift, 'n')],
			scope: SHOW_ITEM,
		},
		[HotKeyActions.GO_TO_THE_PREVIOUS_ITEM]: {
			command: 'navigation.previous_item',
			hotkey: [getHotKey(Key.Shift, 'p')],
			scope: SHOW_ITEM,
		},
	},
};
