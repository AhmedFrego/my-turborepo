import React from 'react';
import { useParams } from 'react-router-dom';
import { DynamicCalender } from 'src/components';

export interface EmployeeVacationsProps {}

export const EmployeeVacations: React.FC<EmployeeVacationsProps> = () => {
	const { id } = useParams();

	return (
		<DynamicCalender
			categoryField="vacation_type_id"
			endField="to"
			filter={{ employee_id: id }}
			resource="vacations"
			startField="from"
			titleField="name"
		/>
	);
};
