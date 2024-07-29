import {
	Chip,
	Paper,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { sentenceCase } from 'change-case';
import React from 'react';
import { useListContext, useLocalizedDate, useTranslate } from 'src/hooks';
import { StatusChip } from 'src/resources/CFA/REQUESTS/base_requests/StatusChip';
import { Tables } from 'src/types';

export interface AuditProps {
	data?: Tables<'status_histories'>[];
}

export const Audit: React.FC<AuditProps> = () => {
	const { data } = useListContext<Tables<'status_histories'>>();
	const date = useLocalizedDate();
	const translate = useTranslate();

	if (!data?.length) return null;

	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.body}`]: {
			fontSize: 14,
		},
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
		},
	}));
	const StyledTableRow = styled(TableRow)(({ theme }) => ({
		// hide last border
		'&:last-child td, &:last-child th': {
			border: 0,
		},
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	}));

	return (
		<TableContainer component={Paper}>
			<Table
				aria-label="customized table"
				sx={{ minWidth: 700 }}
			>
				<TableHead>
					<TableRow>
						{(
							[
								'created_by',
								'old_status',
								'new_status',
								'request_type',
								'message',
								'created_at',
							] as const
						).map(field => {
							return (
								<StyledTableCell key={field}>
									{translate(`resources.status_histories.fields.${field}`)}
								</StyledTableCell>
							);
						})}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map(item => (
						<StyledTableRow key={item.id}>
							<StyledTableCell
								component="th"
								scope="row"
							>
								{item.created_by}
							</StyledTableCell>
							<StyledTableCell>
								<StatusChip status={item.old_status} />
							</StyledTableCell>
							<StyledTableCell>
								<StatusChip status={item.new_status} />
							</StyledTableCell>
							<StyledTableCell>
								{item.request_type ? (
									<Chip label={sentenceCase(item.request_type)} />
								) : null}
							</StyledTableCell>
							<StyledTableCell>
								{item.message ? <Chip label={item.message} /> : null}
							</StyledTableCell>
							<StyledTableCell>
								<Chip label={date(item.created_at)} />
							</StyledTableCell>
							{item.updated_at ? (
								<StyledTableCell>
									<Chip label={date(item.updated_at)} />
								</StyledTableCell>
							) : null}
						</StyledTableRow>
					))}
				</TableBody>
				;
			</Table>
		</TableContainer>
	);
};
