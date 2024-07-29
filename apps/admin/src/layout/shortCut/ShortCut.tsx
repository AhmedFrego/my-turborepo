import SettingsIcon from '@mui/icons-material/SettingsTwoTone';
import {
	Box,
	IconButton,
	List,
	ListItem,
	styled,
	Tooltip,
	useScrollTrigger,
	useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useShortCutContext } from 'src/hooks';
import { Route, ShortCutDialog, ShortCutIcons } from 'src/layout';

export interface ShortCutProps {}

export const ShortCut: React.FC<ShortCutProps> = () => {
	const theme = useTheme();
	const [openModal, setOpenModal] = useState<boolean>(false);
	const { shortcuts } = useShortCutContext();
	const navigate = useNavigate();
	const trigger = useScrollTrigger();

	return (
		<>
			<StyledShortCut>
				<Box
					position="sticky"
					sx={{
						top: {
							lg: 0,
							md: 0,
							xl: 0,
							xs: trigger ? 0 : theme.spacing(6),
						},
					}}
				>
					<List>
						{shortcuts?.map((data: Route) => {
							const { filters, icon, name, shortCutName } = data;
							const IconComponent = ShortCutIcons[icon];

							return (
								<StyledListItem key={JSON.stringify(data)}>
									<Tooltip title={shortCutName}>
										<IconButton
											onClick={() => {
												const queryString =
													createSearchParams(filters).toString();

												navigate(`/${name}/?${queryString}`);
											}}
										>
											<IconComponent />
										</IconButton>
									</Tooltip>
								</StyledListItem>
							);
						})}
						<StyledListItem>
							<IconButton
								color="primary"
								sx={{
									border: `${theme.spacing(0.25)} dashed ${
										theme.palette.primary.main
									}`,
								}}
								onClick={() => {
									setOpenModal(true);
								}}
							>
								<SettingsIcon />
							</IconButton>
						</StyledListItem>
					</List>
				</Box>
			</StyledShortCut>
			<ShortCutDialog
				openModal={openModal}
				setOpenModal={setOpenModal}
			/>
		</>
	);
};

const StyledShortCut = styled(Box)(({ theme }) => ({
	background: theme.palette.background.paper,
	marginInlineStart: theme.spacing(1),
	marginTop: theme.spacing(-7),
	width: theme.spacing(8),
}));

const StyledListItem = styled(ListItem)(() => ({
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
}));
