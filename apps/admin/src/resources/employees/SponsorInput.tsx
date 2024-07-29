import { Button, ButtonGroup } from '@mui/material';
import get from 'lodash/get';
import React, { useState } from 'react';
import { ReferenceInput, SelectInput } from 'src/components';
import { useTranslate } from 'src/hooks';

export interface SponsorInputProps {}

export const SponsorInput: React.FC<SponsorInputProps> = () => {
	const [person, setPerson] = useState(false);
	const translate = useTranslate();

	return (
		<>
			<ButtonGroup>
				<Button onClick={() => setPerson(true)}>
					{translate('resources.employees.name', { smart_count: 1 })}
				</Button>
				<Button onClick={() => setPerson(false)}>
					{translate('resources.entities.name', { smart_count: 1 })}
				</Button>
			</ButtonGroup>
			{person ? (
				<ReferenceInput
					queryOptions={{
						meta: {
							select: '*,employees!sponsors_employee_id_fkey!inner(full_name)',
						},
					}}
					reference="sponsors"
					source="sponsor_id"
				>
					<SelectInput
						optionText={choice => {
							const isPerson = String(get(choice, 'employees.full_name'));

							if (isPerson.length > 0) return isPerson;

							return String(choice.id);
						}}
						source="sponsor_id"
					/>
				</ReferenceInput>
			) : (
				<ReferenceInput
					queryOptions={{
						meta: {
							select: '*,entities!sponsors_entity_id_fkey!inner(name)',
						},
					}}
					reference="sponsors"
					source="sponsor_id"
				>
					<SelectInput
						optionText={choice => {
							const isEntity = String(get(choice, 'entities.name'));

							if (isEntity.length > 0) return isEntity;

							return String(get(choice, 'id'));
						}}
						source="sponsor_id"
					/>
				</ReferenceInput>
			)}
		</>
	);
};
