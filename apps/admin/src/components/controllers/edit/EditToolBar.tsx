import React from 'react';
import {
	DeleteButton,
	SaveButton,
	Toolbar,
	ToolbarProps,
} from 'src/components';

export interface EditToolBarProps extends ToolbarProps {}

export const EditToolBar: React.FC<EditToolBarProps> = props => {
	const { sx, ...rest } = props;

	return (
		<Toolbar
			{...rest}
			sx={{ display: 'flex', justifyContent: 'space-between', ...sx }}
		>
			<SaveButton />
			<DeleteButton mutationMode="pessimistic" />
		</Toolbar>
	);
};
