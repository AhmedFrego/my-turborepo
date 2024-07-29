import {
	Avatar,
	Box,
	createTheme,
	Paper,
	styled,
	ThemeProvider,
	Typography,
} from '@mui/material';
import { sentenceCase } from 'change-case';
import { useTheme } from 'react-admin';
import { PaletteMode, StoreKeys } from 'src/constants';
import { useStore } from 'src/hooks';
import { Theme } from 'src/themes';

export interface RenderThemeSelectorProps {
	mode: PaletteMode;
	theme: Theme;
}

export const RenderThemeSelector: React.FC<
	RenderThemeSelectorProps
> = props => {
	const { mode, theme } = props;
	const isDark = mode === PaletteMode.dark;

	const [, setThemeName] = useStore(StoreKeys.ThemeName);
	const [, setTheme] = useTheme();

	return (
		<ThemeProvider theme={createTheme(isDark ? theme.dark : theme.light)}>
			<StyledPaper
				darkMode={isDark}
				onClick={() => {
					setThemeName(theme.name);
					setTheme(mode);
				}}
			>
				<StyledContainer darkMode={isDark}>
					<StyledTypography variant="body2">
						{`${sentenceCase(theme.name)} (${mode})`}
					</StyledTypography>
				</StyledContainer>
				<StyledContainer
					darkMode={isDark}
					sx={{
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Circle />
					<Box sx={{ flex: 1 }}>
						<Bar sx={{ width: '50%' }} />
						<Bar sx={{ width: '75%' }} />
					</Box>
				</StyledContainer>
			</StyledPaper>
		</ThemeProvider>
	);
};

interface WithDarkMode {
	darkMode: boolean;
}

const StyledPaper = styled(Paper)<WithDarkMode>(({ darkMode, theme }) => ({
	alignItems: 'center',
	background: darkMode
		? theme.palette.secondary.main
		: theme.palette.common.white,
	borderRadius: theme.shape.borderRadius,
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'column',
	height: theme.spacing(18.75),
	justifyContent: 'center',
	margin: theme.spacing(1),
	padding: theme.spacing(2),
	width: theme.spacing(31.25),
}));

const StyledContainer = styled(Box)<WithDarkMode>(({ darkMode, theme }) => ({
	background: darkMode ? theme.palette.secondary.dark : theme.palette.grey[200],
	borderRadius: theme.shape.borderRadius,
	marginBottom: theme.spacing(1),
	padding: theme.spacing(1),
	width: '100%',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.main,
	fontWeight: theme.typography.fontWeightRegular,
}));

const Bar = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	borderRadius: theme.shape.borderRadius,
	height: theme.spacing(1),
	margin: theme.spacing(0.5),
}));

const Circle = styled(Avatar)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	borderRadius: theme.shape.borderRadius,
	color: theme.palette.primary.contrastText,
	height: theme.spacing(3),
	marginRight: theme.spacing(1),
	width: theme.spacing(3),
}));
