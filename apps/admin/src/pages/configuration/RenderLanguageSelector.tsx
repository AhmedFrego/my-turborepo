import { Card, CardContent, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import { FlagImage } from 'react-international-phone';
import { useLocale } from 'src/hooks';
import { LocalizationLanguages } from 'src/utils';

const buttonColors = ['primary', 'secondary', 'info'] as const;

export interface RenderLanguageSelectorProps {}

export const RenderLanguageSelector: React.FC<
	RenderLanguageSelectorProps
> = () => {
	const theme = useTheme();
	const { setLocale } = useLocale();

	const languages = Object.values(LocalizationLanguages);

	return (
		<Grid
			container
			spacing={1}
		>
			{languages.map((item, index) => {
				const { code, flag, label } = item;

				return (
					<Grid
						key={code}
						item
						md={12 / languages.length}
					>
						<Card
							color={buttonColors[index % buttonColors.length]}
							sx={{
								'&:hover': {
									background: `linear-gradient(90deg, ${theme.palette.background.default}, transparent)`,
									boxShadow: theme.shadows[10],
								},
								background: `linear-gradient(45deg, ${theme.palette.background.default}, transparent)`,
								cursor: 'pointer',
							}}
							variant="outlined"
							onClick={() => {
								setLocale(code);
							}}
						>
							<CardContent
								sx={{
									alignItems: 'center',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<FlagImage
									iso2={flag}
									style={{
										height: theme.spacing(5),
										width: theme.spacing(5),
									}}
								/>
								<Typography
									sx={{
										color: theme.palette.primary.main,
										fontWeight: '600',
									}}
									variant="body1"
								>
									{label}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				);
			})}
		</Grid>
	);
};
