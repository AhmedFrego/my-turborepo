import { TopToolbar as RaTopToolbar, ToolbarProps } from 'react-admin';

export const TopToolbar = (props: ToolbarProps) => {
	return (
		<RaTopToolbar
			sx={theme => ({
				background: theme.palette.background.paper,
				marginBottom: theme.spacing(1),
			})}
			{...props}
		/>
	);
};
