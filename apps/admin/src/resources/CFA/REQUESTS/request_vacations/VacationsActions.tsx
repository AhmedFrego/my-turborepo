import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useCreate } from 'src/hooks';
import { Tables } from 'src/types';
import { Logger } from 'src/utils';

import { RequestActions } from '../base_requests/RequestActions';

const Approved = () => {
	const { register } = useFormContext<Tables<'request_vacations'>>();

	return (
		<>
			<TextField
				fullWidth
				label="from"
				variant="outlined"
				{...register('from')}
			/>
			<TextField
				fullWidth
				label="to"
				variant="outlined"
				{...register('to')}
			/>
		</>
	);
};

export interface VacationsActionsProps {}

export const VacationsActions: React.FC<VacationsActionsProps> = () => {
	const [create] = useCreate<'vacations'>();

	return (
		<RequestActions<'request_vacations'>
			slots={{ approved: Approved }}
			onApproved={async record => {
				const { created_by, from, id, owner_id, title, to, vacation_type_id } =
					record;

				try {
					await create('vacations', {
						data: {
							employee_id: created_by,
							from,
							name: title,
							owner_id,
							request_vacation_id: id,
							to,
							vacation_type_id,
						},
					});
				} catch (error) {
					Logger.error(error);
				}
			}}
		/>
	);
};
