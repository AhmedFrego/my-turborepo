import Assessment from '@mui/icons-material/AssessmentTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { EmployeeReportCreate } from './Create';
import { EmployeeReportEdit } from './Edit';
import { EmployeeReportList } from './List';
import { EmployeeReportShow } from './Show';

export const EmployeeReports = managed_admin({
	create: EmployeeReportCreate,
	edit: EmployeeReportEdit,
	icon: Assessment,
	list: EmployeeReportList,
	name: 'employee_reports',
	show: EmployeeReportShow,
});
