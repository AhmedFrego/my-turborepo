import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { useTranslate } from 'src/hooks';
import { TranslationsPaths } from 'src/locales';
import { alwaysArray } from 'src/utils';

import { Kbd } from './styled';

export interface FooterProps {
	icon: string | string[];
	title: TranslationsPaths;
}

export const FooterItem: React.FC<FooterProps> = props => {
	const { icon, title } = props;
	const translate = useTranslate();

	return (
		<StyledBox>
			<Typography>{translate(title)}</Typography>
			{alwaysArray(icon).map(item => {
				return (
					<Kbd
						key={item}
						sx={{ mr: 1 }}
					>
						{item}
					</Kbd>
				);
			})}
		</StyledBox>
	);
};

const StyledBox = styled(Box)(() => ({
	'& .MuiTypography-root': {
		marginRight: 5,
	},
	alignItems: 'center',
	display: 'flex',
	marginRight: 10,
}));
