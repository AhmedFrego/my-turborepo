import ColorLensIcon from '@mui/icons-material/ColorLensTwoTone';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { ToggleThemeButton } from 'src/components';
import { StoreKeys } from 'src/constants';
import { useStore, useTranslate } from 'src/hooks';

import { ThemeName, themes } from './themes';

export const ThemeSwapper = () => {
	const translate = useTranslate();
	const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

	const open = Boolean(anchorElement);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElement(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorElement(null);
	};

	const [themeName, setThemeName] = useStore<ThemeName>(
		StoreKeys.ThemeName,
		'soft',
	);

	const handleChange = (_: React.MouseEvent<HTMLElement>, index: number) => {
		const newTheme = themes[index];

		setThemeName(newTheme.name);
		setAnchorElement(null);
	};

	const currentTheme = themes.find(theme => theme.name === themeName);

	const toggleThemeTitle = translate('ra.action.change_theme', {
		_: 'Change Theme',
	});

	return (
		<>
			<Tooltip
				enterDelay={300}
				title={toggleThemeTitle}
			>
				<IconButton
					aria-label={toggleThemeTitle}
					color="inherit"
					onClick={handleClick}
				>
					<ColorLensIcon />
				</IconButton>
			</Tooltip>
			{currentTheme?.dark ? <ToggleThemeButton /> : null}
			<Menu
				anchorEl={anchorElement}
				open={open}
				onClose={handleClose}
			>
				{themes.map((theme, index: number) => (
					<MenuItem
						key={theme.name}
						selected={theme.name === themeName}
						value={theme.name}
						onClick={event => handleChange(event, index)}
					>
						{sentenceCase(theme.name)}
					</MenuItem>
				))}
			</Menu>
		</>
	);
};
