import AccountCircle from '@mui/icons-material/AccountCircleTwoTone';
import Create from '@mui/icons-material/CreateTwoTone';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNaturalTwoTone';
import Fingerprint from '@mui/icons-material/FingerprintTwoTone';
import InsertDriveFile from '@mui/icons-material/InsertDriveFileTwoTone';
import Update from '@mui/icons-material/UpdateTwoTone';
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	CircularProgress,
	Grid,
	Typography,
} from '@mui/material';
import { ReferenceField, RelativeTime, TextField } from 'src/components';
import {
	useGetResourceLabel,
	useRecordContext,
	useResourceContext,
	useTranslate,
} from 'src/hooks';
import { TranslationsPaths } from 'src/locales';
import { NonJoinPublicTables, Tables } from 'src/types';

import { EssentialsItem } from './EssentialsItem';

export interface EssentialsSlots {
	footer?: React.ReactNode;
	items?: React.ReactNode;
}

export interface EssentialsProps {
	slots?: EssentialsSlots;
}

export const Essentials: React.FC<
	React.PropsWithChildren<EssentialsProps>
> = props => {
	const { children, slots = {} } = props;
	const { footer, items } = slots;

	const translate = useTranslate();
	const resourceLabel = useGetResourceLabel();

	const record = useRecordContext<Tables<NonJoinPublicTables>>();
	const resource = useResourceContext() as NonJoinPublicTables;

	const neverUpdated = (
		<Typography
			component="span"
			variant="body2"
		>
			{translate('custom.common.never_update')}
		</Typography>
	);

	return (
		<Box
			display={{ lg: 'block', xs: 'none' }}
			sx={{ minWidth: '25%', position: 'sticky', top: '4em', width: '25%' }}
		>
			<Box ml={1}>
				<Card>
					{record ? (
						<>
							<CardHeader
								title={`${resourceLabel(resource, 1)} ${translate(
									'custom.common.essentials',
								)}`}
							/>
							<CardContent>
								<Grid
									container
									columnSpacing={1}
									columns={1}
									rowSpacing={1}
								>
									<EssentialsItem
										icon={Fingerprint}
										label={
											`resources.${resource}.fields.id` as TranslationsPaths
										}
									>
										<TextField
											record={record}
											source="id"
										/>
									</EssentialsItem>

									{'created_by' in record ? (
										<EssentialsItem
											icon={AccountCircle}
											label={
												`resources.${resource}.fields.created_by` as TranslationsPaths
											}
										>
											<ReferenceField
												record={record}
												reference="employees"
												source="created_by"
											/>
										</EssentialsItem>
									) : null}

									{'owner_id' in record ? (
										<EssentialsItem
											icon={InsertDriveFile}
											label={
												`resources.${resource}.fields.owner_id` as TranslationsPaths
											}
										>
											<ReferenceField
												record={record}
												reference="entities"
												source="owner_id"
											/>
										</EssentialsItem>
									) : null}

									<EssentialsItem
										icon={Create}
										label={
											`resources.${resource}.fields.created_at` as TranslationsPaths
										}
									>
										<RelativeTime date={record.created_at} />
									</EssentialsItem>

									{'updated_by' in record ? (
										<EssentialsItem
											icon={FaceRetouchingNaturalIcon}
											label={
												`resources.${resource}.fields.updated_by` as TranslationsPaths
											}
										>
											{record.updated_by ? (
												<ReferenceField
													record={record}
													reference="employees"
													source="updated_by"
												/>
											) : (
												neverUpdated
											)}
										</EssentialsItem>
									) : null}

									<EssentialsItem
										icon={Update}
										label={
											`resources.${resource}.fields.updated_at` as TranslationsPaths
										}
									>
										{record.updated_at ? (
											<RelativeTime date={record.updated_at} />
										) : (
											neverUpdated
										)}
									</EssentialsItem>

									{items}
								</Grid>
							</CardContent>
						</>
					) : (
						<Box
							sx={{
								alignItems: 'center',
								display: 'flex',
								flexDirection: 'column',
								m: 2,
								width: '100%',
							}}
						>
							<CircularProgress size={20} />
						</Box>
					)}
				</Card>
			</Box>
			{children}
			{footer}
		</Box>
	);
};
