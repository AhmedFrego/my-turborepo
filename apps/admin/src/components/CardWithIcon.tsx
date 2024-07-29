import {
	Box,
	Card,
	CircularProgress,
	Divider,
	Palette,
	PaletteColor,
	Typography,
} from '@mui/material';
import React, { ReactElement, ReactNode } from 'react';
import { usePreferencesEditor } from 'react-admin';
import { Link, LinkProps } from 'react-router-dom';
import { AnyString, useTranslate } from 'src/hooks';
import { TranslationsPaths } from 'src/locales';

type ColorsWithMain = {
	[K in keyof Palette]: Palette[K] extends PaletteColor ? K : never;
}[keyof Palette];

export interface CardWithIconProps extends Pick<LinkProps, 'to'> {
	/**
	 * Optional content to be displayed below the card, separated by a Divider.
	 */
	children?: ReactNode;
	/**
	 * The color of the card, using predefined color names from the Material-UI Palette.
	 *
	 * @default secondary
	 */
	color?: ColorsWithMain;
	/**
	 * The icon to be displayed on the card.
	 */
	icon: ReactElement;
	/**
	 * The subtitle of the card
	 */
	subtitle?: null | number | ReactElement | string;
	/**
	 * The title of the card, translated using the application's translation function.
	 */
	title: AnyString | TranslationsPaths;
}

/**
 * React component designed for creating cards with an icon, title, and subtitle.
 */
export const CardWithIcon: React.FC<CardWithIconProps> = props => {
	const { children, color = 'secondary', icon, subtitle, title, to } = props;

	const translate = useTranslate();
	const { isEnabled } = usePreferencesEditor();
	/**
	 * disallow navigation while preferences editor is on
	 */
	const Component = isEnabled ? 'div' : Link;

	return (
		<Card
			sx={{
				'& a': {
					color: 'inherit',
					textDecoration: 'none',
				},
				display: 'flex',
				flex: '1',
				flexDirection: 'column',
				minHeight: 52,
			}}
		>
			<Component to={to}>
				<Box
					sx={{
						'& .icon': {
							color: `${color}.main`,
						},
						'&:before': {
							aspectRatio: '1',
							backgroundColor: `${color}.main`,
							borderRadius: '50%',
							content: `''`,
							display: 'block',
							height: '200%',
							left: 0,
							opacity: 0.15,
							position: 'absolute',
							top: '50%',
							transform: 'translate(-30%, -60%)',
						},
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'space-between',
						overflow: 'hidden',
						padding: 2,
						position: 'relative',
					}}
				>
					<Box
						className="icon"
						width="2em"
					>
						{icon}
					</Box>
					<Box textAlign="right">
						<Typography color="textSecondary">{translate(title)}</Typography>
						<Typography
							component="h2"
							variant="h5"
						>
							{subtitle ?? <CircularProgress size={20} />}
						</Typography>
					</Box>
				</Box>
			</Component>
			{children && <Divider />}
			{children}
		</Card>
	);
};
