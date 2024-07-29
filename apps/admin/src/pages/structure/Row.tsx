import Close from '@mui/icons-material/CloseTwoTone';
import Done from '@mui/icons-material/DoneTwoTone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import {
	Collapse,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableRow,
} from '@mui/material';
import hashIt from 'hash-it';
import {
	defaultValueHash,
	nameHash,
	nullableHash,
	typeHash,
	userTypeHash,
} from 'src/common';
import { useStore, useTranslate } from 'src/hooks';
import { TranslationsPaths } from 'src/locales';
import { StructureColumn } from 'src/types';

import { LangRow } from './LangRow';
import { ValidationRow } from './ValidationRow';

export interface RowProps {
	row: StructureColumn;
	table: string;
}

export const Row: React.FC<RowProps> = props => {
	const { row, table } = props;

	const defaultValue = row[defaultValueHash];
	const name = row[nameHash];
	const nullable = row[nullableHash];
	const type = row[typeHash];
	const userType = row[userTypeHash];

	const translate = useTranslate();
	const [open, setOpen] = useStore<boolean>(`structure.${table}.${name}`, true);

	return (
		<>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell align="left">
					{translate(`resources.${table}.fields.${name}` as TranslationsPaths)}{' '}
					({name})
				</TableCell>
				<TableCell align="right">{type}</TableCell>
				<TableCell align="right">{defaultValue}</TableCell>
				<TableCell align="right">
					{nullable === hashIt(true) ? (
						<Done color="success" />
					) : (
						<Close color="error" />
					)}
				</TableCell>
				<TableCell align="right">{userType}</TableCell>
				<TableCell align="right">
					{nullable === hashIt(false) && defaultValue === hashIt(null) ? (
						<Done color="success" />
					) : (
						<Close color="error" />
					)}
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell
					colSpan={7}
					sx={{ p: 0 }}
				>
					<Collapse
						unmountOnExit
						component="span"
						in={open}
						timeout="auto"
					>
						<Table size="small">
							<TableBody>
								<LangRow
									name={name}
									sub="fields"
									table={table}
									title={translate('custom.common.field')}
								/>
								<LangRow
									name={name}
									sub="helperText"
									table={table}
									title={translate('custom.common.helper_text')}
								/>
								<LangRow
									name={name}
									sub="privacy"
									table={table}
									title={translate('custom.common.privacy_notice')}
								/>
								<ValidationRow
									app="dashboard"
									column={name}
									table={table}
								/>
								<ValidationRow
									app="app"
									column={name}
									table={table}
								/>
							</TableBody>
						</Table>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
};
