import { useTheme } from '@mui/material';
import get from 'lodash/get';
import { RowClickFunction, WrapperField } from 'react-admin';
import {
	DatagridConfigurable,
	DatagridConfigurableProps,
	PrintIcon,
	ShortId,
} from 'src/components';
import { useResourceDefinition, useUser } from 'src/hooks';

import { EditIcon } from './EditIcon';
import { ShowIcon } from './ShowIcon';

export interface CustomDataGridSlots {
	rowActions: React.ReactNode;
}

export interface DataGridProps extends DatagridConfigurableProps {
	enablePrint?: boolean;
	slots?: CustomDataGridSlots;
	withId?: boolean;
}

export const CustomDataGrid: React.FC<
	React.PropsWithChildren<DataGridProps>
> = props => {
	const {
		children,
		enablePrint = false,
		slots,
		withId = true,
		...rest
	} = props;
	const { rowActions } = slots ?? {};

	const user = useUser();
	const theme = useTheme();
	const { hasEdit, hasShow, name } = useResourceDefinition();

	let defaultRowClick: false | RowClickFunction | string;

	switch (true) {
		case hasShow: {
			defaultRowClick = 'show';
			break;
		}

		case hasEdit: {
			defaultRowClick = 'edit';
			break;
		}

		default: {
			defaultRowClick = false;
		}
	}

	return (
		<DatagridConfigurable
			preferenceKey={`${name}.datagrid`}
			rowClick={defaultRowClick}
			rowSx={record => {
				if (get(record, 'created_by') === user?.id)
					return {
						borderLeftColor: theme.palette.success.main,
						borderLeftStyle: 'solid',
						borderLeftWidth: theme.spacing(0.5),
					};

				return {};
			}}
			sx={{
				'& .RaDatagrid-rowEven': {
					// backgroundColor: '#C0C0C0',
				},
			}}
			{...rest}
		>
			{withId ? <ShortId source="id" /> : null}
			{children}
			<WrapperField
				label="Actions"
				source=""
			>
				{rowActions}
				<EditIcon />
				<ShowIcon />
				{enablePrint ? <PrintIcon /> : null}
			</WrapperField>
		</DatagridConfigurable>
	);
};
