import { useTheme } from '@mui/material';
import { ThemeType, useTheme as useRaTheme } from 'react-admin';

export const useMode = (type?: ThemeType) => {
	const theme = useTheme();

	const [, setMode] = useRaTheme(type);

	return [theme.palette.mode, setMode] as const;
};
