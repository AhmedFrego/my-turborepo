import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useHotkeys, usePreviousNextController } from 'src/hooks';

export interface EditHotKeysProps {}

export const EditHotKeys: React.FC<EditHotKeysProps> = () => {
	const navigate = useNavigate();
	const { hasNext, hasPrev, nextPath, prevPath } = usePreviousNextController({
		linkType: 'edit',
	});

	useHotkeys('edit.GO_TO_THE_NEXT_ITEM', () => {
		if (hasNext && nextPath) navigate(nextPath);
	});

	useHotkeys('edit.GO_TO_THE_PREVIOUS_ITEM', () => {
		if (hasPrev && prevPath) navigate(prevPath);
	});

	return null;
};
