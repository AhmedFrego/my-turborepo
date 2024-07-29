import { TableCell, TableRow } from '@mui/material';
import { LanguageCodeEnum } from 'src/constants';

import { LangInput } from './LangInput';

export interface LangRowProps {
	name: number | string;
	sub: 'fields' | 'helperText' | 'privacy';
	table: string;
	title: string;
}

export const LangRow: React.FC<LangRowProps> = props => {
	const { name, sub, table, title } = props;
	const languages = [LanguageCodeEnum.ar, LanguageCodeEnum.en];
	const languageInputSpan = Math.floor(5 / languages.length);

	return (
		<TableRow>
			<TableCell>{title}</TableCell>
			{languages.map(langCode => (
				<TableCell
					key={langCode}
					colSpan={languageInputSpan}
				>
					<LangInput
						langCode={langCode}
						name={name}
						sub={sub}
						table={table}
					/>
				</TableCell>
			))}
		</TableRow>
	);
};
