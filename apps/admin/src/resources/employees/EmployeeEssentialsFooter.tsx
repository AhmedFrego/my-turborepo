import { CardHeader } from '@mui/material';
import { EmployeeRatings } from 'src/charts';
import { AsideFooter, EmployeeVacationsLink } from 'src/components';

export interface EmployeeEssentialsFooterProps {}

export const EmployeeEssentialsFooter: React.FC<
	EmployeeEssentialsFooterProps
> = () => {
	return (
		<>
			<AsideFooter>
				<CardHeader title="Employee Quarterly Reports" />
				<EmployeeRatings />
			</AsideFooter>
			<AsideFooter>
				<EmployeeVacationsLink />
			</AsideFooter>
		</>
	);
};
