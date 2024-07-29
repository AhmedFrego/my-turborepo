import { alpha, styled } from '@mui/material';
import { KBarAnimator, KBarPositioner, KBarSearch } from 'kbar';

export const StyledKBarPositioner = styled(KBarPositioner)(({ theme }) => ({
	background: alpha(theme.palette.grey[900], 0.5),
	zIndex: theme.zIndex.tooltip,
}));

export const StyledKBarAnimator = styled(KBarAnimator)(({ theme }) => ({
	background: theme.palette.background.paper,
	borderRadius: theme.shape.borderRadius,
	boxShadow: theme.shadows[5],
	color: theme.palette.text.primary,
	maxWidth: theme.spacing(75),
	overflow: 'hidden',
	width: '100%',
}));

export const StyledKBarSearch = styled(KBarSearch)(({ theme }) => ({
	background: theme.palette.background.paper,
	borderBottom: `${theme.spacing(0.25)} solid ${
		theme.palette.primary.main
	} !important`,
	boxSizing: 'border-box',
	color: theme.palette.text.primary,
	fontFamily: theme.typography.fontFamily,
	fontSize: `${theme.spacing(2.5)} !important`,
	fontWeight: 600,
	outline: 'none',
	padding: theme.spacing(1.5, 4),
	width: '100%',
}));

export const StyledGroupName = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(1.25),
	opacity: 0.5,
	padding: theme.spacing(1, 2),
	textTransform: 'uppercase',
}));

export const StyledResultItem = styled('div', {
	shouldForwardProp: prop => prop !== 'active',
})<{ active: boolean }>(({ active, theme }) => ({
	alignItems: 'center',
	backgroundColor: active ? theme.palette.action.selected : 'transparent',
	borderLeft: `${theme.spacing(0.25)} solid ${
		active ? theme.palette.primary.main : 'transparent'
	}`,
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'space-between',
	padding: theme.spacing(1.5, 2),
}));

export const StyledActionWrapper = styled('div')(({ theme }) => ({
	alignItems: 'center',
	display: 'flex',
	fontSize: '14px',
	gap: theme.spacing(1),
}));

export const StyledShortcutWrapper = styled('div')(({ theme }) => ({
	display: 'grid',
	gap: theme.spacing(0.125),
	gridAutoFlow: 'column',
}));

export const Kbd = styled('kbd')<{ size?: string }>(({ theme }) => ({
	'&.size-lg': {
		fontSize: theme.typography.h6.fontSize,
	},
	'&.size-md': {
		fontSize: theme.typography.subtitle1.fontSize,
	},
	'&.size-sm': {
		fontSize: theme.typography.body1.fontSize,
	},
	'&.size-xl': {
		fontSize: theme.typography.h5.fontSize,
	},
	'&.size-xs': {
		fontSize: theme.spacing(1.25),
	},
	background: alpha(theme.palette.primary.main, 0.1),
	border: `${theme.spacing(0.25)} solid ${alpha(theme.palette.primary.main, 0.5)}`,
	borderRadius: theme.spacing(0.5),
	boxShadow: `${theme.spacing(0.25)} ${theme.spacing(0.25)} ${theme.spacing(1)} ${alpha(theme.palette.primary.main, 0.5)}`,
	fontSize: theme.typography.body2.fontSize,
	margin: 0,
	padding: theme.spacing(0.5, 0.75),
	transition: '0.5s',
}));
