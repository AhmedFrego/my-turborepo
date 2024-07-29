import { Checkbox, TableCell, TableRow } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { tableHash } from 'src/common';
import { useTranslate } from 'src/hooks';
import { TranslationsPaths } from 'src/locales';
import { StructureTable } from 'src/types';

export const PermissionRow = (props: {
	actions: string[];
	row: StructureTable;
}) => {
	const { actions, row } = props;
	const translate = useTranslate();
	const { register } = useFormContext();

	return (
		<TableRow
			sx={{
				'& > *': {
					borderBottom: 'unset',
				},
			}}
		>
			<TableCell>
				{translate(`resources.${row[tableHash]}.name` as TranslationsPaths, {
					smart_count: 2,
				})}
			</TableCell>
			{actions.map(item => {
				return (
					<TableCell key={item}>
						<Checkbox {...register(`permissions.${row[tableHash]}.${item}`)} />
					</TableCell>
				);
			})}
		</TableRow>
	);
};
