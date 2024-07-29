import Share from '@mui/icons-material/ShareTwoTone';
import React from 'react';
import { ButtonProps } from 'react-admin';
import { Button } from 'src/components';
import {
	useGetRecordRepresentation,
	useRecordContext,
	useResourceContext,
} from 'src/hooks';
import { NonJoinPublicTables } from 'src/types';
import { Logger } from 'src/utils';

export interface ShareButtonProps extends ButtonProps {}

export const ShareButton: React.FC<ShareButtonProps> = props => {
	const { ...rest } = props;
	const record = useRecordContext();
	const resource = useResourceContext();
	const getRecordRepresentation = useGetRecordRepresentation(
		resource as unknown as NonJoinPublicTables,
	);
	const title = getRecordRepresentation(record)?.toString();
	const url = window.location.href;

	return window.navigator.share === undefined ? null : (
		<Button
			label="Share"
			startIcon={<Share />}
			onClick={() => {
				if (window.navigator.share !== undefined) {
					window.navigator
						.share({
							text: title,
							title,
							url,
						})
						.catch(Logger.error);
				}
			}}
			{...rest}
		/>
	);
};
