import { Box, Card, CardContent } from '@mui/material';
import { Title } from 'src/components';
import { AdminRoutes, PaletteMode } from 'src/constants';
import { useTranslate } from 'src/hooks';
import { themes } from 'src/themes';

import { RenderLanguageSelector } from './RenderLanguageSelector';
import { RenderThemeSelector } from './RenderThemeSelector';

export const Configuration = () => {
	const translate = useTranslate();

	return (
		<Card>
			<Title title={translate(`custom.pages.${AdminRoutes.Configuration}`)} />
			<CardContent>
				<RenderLanguageSelector />
			</CardContent>
			<CardContent>
				<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
					{themes.map(theme => (
						<Box
							key={theme.name}
							sx={{ margin: 1 }}
						>
							<RenderThemeSelector
								mode={PaletteMode.light}
								theme={theme}
							/>
							{theme.dark && (
								<RenderThemeSelector
									mode={PaletteMode.dark}
									theme={theme}
								/>
							)}
						</Box>
					))}
				</Box>
			</CardContent>
		</Card>
	);
};
