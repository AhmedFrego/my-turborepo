import { Box, Grid, SvgIconProps, Typography } from '@mui/material';
import React from 'react';
import { useTranslate } from 'src/hooks';
import { TranslationsPaths } from 'src/locales';

export interface EditAsideItemProps {
	icon: React.ElementType<SvgIconProps>;
	label: TranslationsPaths;
}

export const EssentialsItem: React.FC<
	React.PropsWithChildren<EditAsideItemProps>
> = props => {
	const { children, icon: Icon, label } = props;

	const translate = useTranslate();

	return (
		<Grid
			item
			display="flex"
			gap={1}
			xs={6}
		>
			<Icon
				color="primary"
				fontSize="small"
			/>
			<Box flexGrow={1}>
				<Typography
					color="primary"
					variant="body2"
				>
					{translate(label)}
				</Typography>
				{children}
			</Box>
		</Grid>
	);
};
