import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useHotkeys, usePreviousNextController } from 'src/hooks';

export interface ShowHotKeysProps {}

export const ShowHotKeys: React.FC<ShowHotKeysProps> = () => {
	const navigate = useNavigate();
	const { hasNext, hasPrev, nextPath, prevPath } = usePreviousNextController({
		linkType: 'show',
	});

	useHotkeys('show.GO_TO_THE_NEXT_ITEM', () => {
		if (hasNext && nextPath) navigate(nextPath);
	});

	useHotkeys('show.GO_TO_THE_PREVIOUS_ITEM', () => {
		if (hasPrev && prevPath) navigate(prevPath);
	});

	return null;
};
