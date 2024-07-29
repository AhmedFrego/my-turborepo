import LockPersonIcon from '@mui/icons-material/LockPersonTwoTone';
import { Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslate } from 'src/hooks';

export interface AccessDeniedProps {}

export const AccessDenied: React.FC<AccessDeniedProps> = () => {
	const translate = useTranslate();

	return (
		<Container
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
				justifyContent: 'center',
			}}
		>
			<LockPersonIcon sx={{ fontSize: 250 }} />
			<Typography
				fontWeight="bold"
				my={2}
				variant="h4"
			>
				{translate('custom.common.access_denied')}
			</Typography>
		</Container>
	);
};
