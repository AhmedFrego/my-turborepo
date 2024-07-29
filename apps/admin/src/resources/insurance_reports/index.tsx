import { managed_admin } from 'src/resources/helpers';

import { InsuranceReportCreate } from './Create';
import { InsuranceReportEdit } from './Edit';
import { InsuranceReportList } from './List';

export const InsuranceReports = managed_admin({
	create: InsuranceReportCreate,
	edit: InsuranceReportEdit,
	hasShow: false,
	list: InsuranceReportList,
	name: 'insurance_reports',
});
