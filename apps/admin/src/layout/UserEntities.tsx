import {
	Avatar,
	Box,
	Menu,
	MenuItem,
	Radio,
	Tooltip,
	useTheme,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	useEmployeeContext,
	useGetRecordRepresentation,
	useTranslate,
} from 'src/hooks';
import { stringToColor } from 'src/utils';

export interface UserEntitiesProps {}

export const UserEntities: React.FC<UserEntitiesProps> = () => {
	const translate = useTranslate();
	const {
		current: storeCurrent,
		entities,
		setCurrent: setStoreCurrent,
	} = useEmployeeContext();
	const navigate = useNavigate();

	const getEntityLabel = useGetRecordRepresentation('entities');

	const [current, setCurrent] = useState(storeCurrent);
	const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
	const [currentChanged, setCurrentChanged] = useState(false);
	const theme = useTheme();

	const open = Boolean(anchorElement);

	useEffect(() => {
		if (current !== storeCurrent) {
			setCurrentChanged(true);
		}
	}, [current, storeCurrent]);

	const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
		setAnchorElement(event.currentTarget);
	}, []);

	const handleClose = useCallback(() => {
		setAnchorElement(null);

		if (currentChanged) {
			navigate(0);
			setStoreCurrent(current);
			setCurrentChanged(false);
		}
	}, [currentChanged, current, navigate, setStoreCurrent]);

	const handleSelect = useCallback(
		(item: string) => {
			setCurrent(item);
		},
		[setCurrent],
	);

	const entity = entities?.find(
		entity => String(entity.entities?.id) === current,
	);

	const label = getEntityLabel(entity?.entities)?.toString() ?? '';

	return (
		<>
			<Tooltip
				placement="right"
				title={translate('tool_tips.user_entities')}
			>
				<Box
					sx={{
						alignItems: 'center',
						cursor: 'pointer',
						display: 'flex',
						justifyContent: 'center',
						padding: theme.spacing(1),
					}}
				>
					<Avatar
						sx={{
							bgcolor: stringToColor(label),
							color: 'primary.contrastText',
							height: 30,
							width: 30,
						}}
						onClick={handleClick}
					>
						{label.slice(0, 1).toUpperCase()}
					</Avatar>
				</Box>
			</Tooltip>
			<Menu
				MenuListProps={{ 'aria-labelledby': 'basic-button' }}
				anchorEl={anchorElement}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				id="basic-menu"
				open={open}
				slotProps={{
					paper: {
						elevation: 0,
						sx: {
							'& .MuiAvatar-root': {
								height: 32,
								ml: -0.5,
								mr: 1,
								width: 32,
							},
							'&:before': {
								bgcolor: 'background.paper',
								content: '""',
								display: 'block',
								height: 10,
								position: 'absolute',
								right: 14,
								top: 0,
								transform: 'translateY(-50%) rotate(45deg)',
								width: 10,
								zIndex: 0,
							},
							filter: `drop-shadow(0 ${theme.spacing(0.125)} ${theme.spacing(
								0.5,
							)} rgba(0,0,0,0.32))`,
							maxHeight: 48 * 8.5,
							mt: 1.5,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				onClose={handleClose}
			>
				{entities?.map(item => {
					if (!item.entities) return null;

					const { id, name } = item.entities;

					return (
						<MenuItem
							key={name}
							onClick={() => {
								handleSelect(id);
							}}
						>
							<Radio
								checked={current?.includes(id)}
								inputProps={{ 'aria-label': name }}
								onChange={() => handleSelect(id)}
							/>
							{getEntityLabel(item.entities)}
						</MenuItem>
					);
				})}
			</Menu>
		</>
	);
};
