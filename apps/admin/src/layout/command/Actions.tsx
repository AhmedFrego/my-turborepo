import { useKBar } from 'kbar';
import React from 'react';
import { useHotkeys } from 'src/hooks';

export interface ActionsProps {}

export const Actions: React.FC<ActionsProps> = () => {
	const { query } = useKBar();

	useHotkeys(
		'command.TOGGLE_COMMAND',
		() => {
			query.toggle();
		},
		{ preventDefault: true },
	);

	return null;
};
