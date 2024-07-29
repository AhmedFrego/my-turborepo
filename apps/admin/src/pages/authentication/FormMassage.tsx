import { Box, useTheme } from '@mui/material';
import React from 'react';

export interface FormMassageProps {
	massage: string;
	type?: 'error' | 'success';
}

export const FormMassage: React.FC<FormMassageProps> = props => {
	const { massage, type = 'error' } = props;
	const theme = useTheme();

	return massage ? (
		<Box
			sx={{
				background:
					type === 'error'
						? theme.palette.error.light
						: theme.palette.success.light,
				border: `${theme.spacing(0.5)} solid ${
					type === 'error'
						? theme.palette.error.main
						: theme.palette.success.main
				}`,
				color: theme.palette.common.white,
				mt: 2,
				p: 1,
			}}
		>
			{massage}
		</Box>
	) : null;
};
