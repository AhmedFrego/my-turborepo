import Language from '@mui/icons-material/PersonPinCircleTwoTone';
import Phone from '@mui/icons-material/PhoneTwoTone';
import {
	Box,
	Divider,
	Grid,
	ListItem,
	Typography,
	useTheme,
} from '@mui/material';
import React from 'react';
import { ImageField, ReferenceField } from 'src/components';
import { useRecordContext } from 'src/hooks';
import { Tables } from 'src/types';

interface ListItemWithIconProps {
	icon: React.ReactElement;
	text: React.ReactNode;
}

const ListItemWithIcon = (props: ListItemWithIconProps) => (
	<ListItem sx={{ alignItems: 'center', display: 'flex' }}>
		{props.icon}
		<Typography>{props.text}</Typography>
	</ListItem>
);

export interface ShowHeaderProps {}

export const ShowHeader: React.FC<ShowHeaderProps> = () => {
	const theme = useTheme();
	const record = useRecordContext<Tables<'employees'>>();

	const jobTitle = 'Jop Title';

	if (!record) return null;

	return (
		<Grid
			container
			alignItems="center"
			p={2}
			sx={{
				background: theme.palette.background.paper,
				borderRadius: theme.spacing(1),
				boxShadow: theme.shadows[3],
			}}
		>
			<Grid
				item
				display="flex"
				md={5}
				sx={{ alignItems: 'center' }}
			>
				<Box sx={{ marginRight: theme.spacing(2), position: 'relative' }}>
					<ImageField source="image_id" />
				</Box>
				<Box>
					<Typography
						fontWeight={900}
						variant="h5"
					>
						{record.full_name}
					</Typography>
					<Typography
						color={theme.palette.grey[500]}
						fontWeight={400}
						variant="body2"
					>
						{jobTitle}
					</Typography>
				</Box>
			</Grid>
			<Divider
				flexItem
				color={theme.palette.primary.main}
				orientation="vertical"
				sx={{ height: 'unset', opacity: 0.6 }}
			/>

			<Grid
				item
				md={6}
				sx={{ padding: 0 }}
			>
				<ListItemWithIcon
					icon={<Phone color="primary" />}
					text={record.phone}
				/>

				<ListItemWithIcon
					icon={<Language color="primary" />}
					text={
						<>
							{record.street + ', '}
							<ReferenceField
								reference="res_cities"
								source="city_id"
							/>
							{', '}
							<ReferenceField
								reference="res_countries"
								source="country_id"
							/>
						</>
					}
				/>
			</Grid>
		</Grid>
	);
};
