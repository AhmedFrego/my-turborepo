import { useTheme } from '@mui/material';
import React from 'react';
import { Create as RACreate, CreateProps as RACreateProps } from 'react-admin';
import {
	RaRecord,
	RaRecordInsert,
	RaRecordInsertTable,
	RaRecordTable,
} from 'src/hooks';
import { PublicTables } from 'src/types';

import { CreateActions } from './CreateActions';

export interface CreateProps<
	T extends PublicTables = PublicTables,
	RecordType extends RaRecordInsert = RaRecordInsertTable[T],
	ResultRecordType extends RaRecord = RaRecordTable[T],
> extends Omit<RACreateProps<RecordType, Error, ResultRecordType>, 'resource'> {
	resource?: T;
}

export const Create = <
	T extends PublicTables = PublicTables,
	RecordType extends RaRecordInsert = RaRecordInsertTable[T],
	ResultRecordType extends RaRecord = RaRecordTable[T],
>(
	props: {
		children: React.ReactNode;
	} & CreateProps<T, RecordType, ResultRecordType>,
) => {
	const { actions, ...rest } = props;

	const theme = useTheme();

	const formStyles = {
		'& .RaCreate-main': {
			'& .MuiPaper-root': {
				padding: theme.spacing(2),
			},
		},
		[theme.breakpoints.down('lg')]: {
			width: '100%',
		},
		[theme.breakpoints.down('xl')]: {
			width: '75%',
		},
		width: '50%',
	};

	return (
		<RACreate
			actions={<CreateActions>{actions}</CreateActions>}
			sx={formStyles}
			{...rest}
		/>
	);
};
