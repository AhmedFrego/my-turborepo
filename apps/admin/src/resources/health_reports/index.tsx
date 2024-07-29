import { managed_admin } from 'src/resources/helpers';

import { HealthReportCreate } from './Create';
import { HealthReportEdit } from './Edit';
import { HealthReportList } from './List';
import { HealthReportShow } from './Show';

export const HealthReports = managed_admin({
	create: HealthReportCreate,
	edit: HealthReportEdit,
	list: HealthReportList,
	name: 'health_reports',
	show: HealthReportShow,
});
