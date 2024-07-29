import {
	Avatar,
	Box,
	Chip,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Paper,
	Typography,
} from '@mui/material';
import React from 'react';
import { FunctionField, ReferenceField } from 'src/components';
import {
	useGetList,
	useGetRecordRepresentation,
	useLocalizedDate,
	useRecordContext,
} from 'src/hooks';
import { Tables } from 'src/types';

import { StatusChip } from './StatusChip';

export interface RequestAuditProps {}

export const RequestAudit: React.FC<RequestAuditProps> = () => {
	const record = useRecordContext();
	const getAccountLabel = useGetRecordRepresentation('employees');
	const date = useLocalizedDate();

	const { data } = useGetList(
		'status_histories',
		{
			filter: { request_uuid: String(record?.id) },
			pagination: { page: 1, perPage: 100 },
			sort: { field: 'created_at', order: 'DESC' },
		},
		{ enabled: !!record?.id },
	);

	if (!data?.length) return null;

	return (
		<List
			component={Paper}
			sx={{ m: 2 }}
		>
			{data?.map((item, index) => {
				const { created_at, id, message, new_status, old_status } = item;

				return (
					<React.Fragment key={id}>
						<ReferenceField
							key={id}
							link={false}
							record={item}
							reference="employees"
							source="created_by"
						>
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<FunctionField
										// @ts-ignore - pass
										render={(employees: Tables<'employees'>) => {
											const { image_id } = employees;

											return (
												<ListItemAvatar>
													<Avatar
														alt={getAccountLabel(employees)?.toString()}
														src={`${image_id}?size=32x32`}
														sx={{
															bgcolor: 'secondary.dark',
															color: 'primary.contrastText',
														}}
													/>
												</ListItemAvatar>
											);
										}}
										source="image_id"
									/>
								</ListItemAvatar>
								<ListItemText
									primary={
										<FunctionField
											// @ts-ignore - pass
											render={(employees: Tables<'employees'>) => {
												return (
													<Typography
														color="text.primary"
														component="span"
														sx={{ display: 'inline' }}
														variant="body2"
													>
														<Box
															component="span"
															sx={{ mr: 1 }}
														>
															{getAccountLabel(employees)}
														</Box>
														{old_status === 'initial' ? null : (
															<StatusChip status={old_status} />
														)}
														<StatusChip status={new_status} />
														<Chip label={date(created_at)} />
													</Typography>
												);
											}}
											source="new_status"
										/>
									}
									secondary={message}
								/>
							</ListItem>
						</ReferenceField>
						{index === Number(data?.length) - 1 ? null : (
							<Divider
								component="li"
								sx={{ margin: 0 }}
								variant="inset"
							/>
						)}
					</React.Fragment>
				);
			})}
		</List>
	);
};
