import { TableCell, TableRow } from '@mui/material';
import { useTranslate } from 'src/hooks';

import { ValidationInput } from './ValidationInput';

export interface ValidationRowProps {
	app: 'app' | 'dashboard';
	column: number | string;
	table: string;
}

export const ValidationRow: React.FC<ValidationRowProps> = props => {
	const { app, column, table } = props;
	const translate = useTranslate();

	return (
		<TableRow>
			<TableCell>
				{translate(`custom.common.validation.apps.${app}`)}{' '}
				{translate('custom.common.validation.validation')}
			</TableCell>
			<TableCell colSpan={2}>
				<ValidationInput
					app={app}
					column={column}
					level="preferable"
					table={table}
				/>
			</TableCell>
			<TableCell colSpan={2}>
				<ValidationInput
					app={app}
					column={column}
					level="required"
					table={table}
				/>
			</TableCell>
		</TableRow>
	);
};
