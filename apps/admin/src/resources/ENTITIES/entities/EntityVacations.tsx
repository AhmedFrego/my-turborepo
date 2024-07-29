import React from 'react';
import { useParams } from 'react-router-dom';
import { DynamicCalender } from 'src/components';

export interface EntityVacationsProps {}

export const EntityVacations: React.FC<EntityVacationsProps> = () => {
	const { id } = useParams();

	return (
		<DynamicCalender
			categoryField="vacation_type_id"
			endField="to"
			filter={{ owner_id: id }}
			resource="vacations"
			startField="from"
			titleField="name"
		/>
	);
};
