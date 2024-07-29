import Link from '@mui/icons-material/LinkTwoTone';
import { Button as MuiButton } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Count } from 'src/components';
import { useCreatePath, useResourceDefinition, useTranslate } from 'src/hooks';

export interface EmployeeVacationsLinkProps {}

export const EmployeeVacationsLink: React.FC<
	EmployeeVacationsLinkProps
> = () => {
	const translate = useTranslate();
	const navigate = useNavigate();
	const createPath = useCreatePath();
	const { name } = useResourceDefinition();
	const { id } = useParams();

	const requestsFilter = { created_by: id };

	if (!id) return null;

	return (
		<>
			<MuiButton
				startIcon={<Link />}
				onClick={() =>
					navigate(
						createPath({ id, resource: name, sup: 'vacations', type: 'edit' }),
					)
				}
			>
				{translate('resources.vacations.name', { smart_count: 2 })} (
				<Count
					filter={{ employee_id: id }}
					resource="vacations"
				/>
				)
			</MuiButton>
			{(['requests', 'proposals', 'complaints'] as const).map(item => {
				return (
					<MuiButton
						key={item}
						startIcon={<Link />}
						onClick={() => {
							navigate({
								pathname: createPath({ resource: `base_${item}` }),
								search: `filter=${JSON.stringify(requestsFilter)}`,
							});
						}}
					>
						{translate(`resources.${item}.name`, { smart_count: 2 })} (
						<Count
							filter={requestsFilter}
							resource={`base_${item}`}
						/>
						)
					</MuiButton>
				);
			})}
		</>
	);
};
