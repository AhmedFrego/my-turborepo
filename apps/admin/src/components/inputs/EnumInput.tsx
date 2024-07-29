import React from 'react';
import { useValidResourceColumn } from 'src/hooks';
import {
	EntityLevel,
	Genders,
	HealthcareProviderTypes,
	HealthcareServiceTypes,
	RequestStatuses,
	SeparationReasons,
} from 'src/types';

import { GridWrapper, GridWrapperProps } from './GridWrapper';
import { SelectInput, SelectInputProps } from './SelectInput';

const Enums = {
	entity_levels: EntityLevel,
	genders: Genders,
	healthcare_provider_types: HealthcareProviderTypes,
	healthcare_service_types: HealthcareServiceTypes,
	request_statuses: RequestStatuses,
	separation_reasons: SeparationReasons,
};

const stringToChoice = <T extends keyof typeof Enums>(
	enumName: T,
	item: string,
) => ({
	id: item,
	name: `enum.${enumName}.${item}`,
});

const enumToOptions = <T extends keyof typeof Enums>(
	inputEnum: T,
): { id: T[keyof T]; name: string }[] =>
	Object.keys(Enums[inputEnum]).map(
		element =>
			stringToChoice(inputEnum, element) as { id: T[keyof T]; name: string },
	);

export interface EnumInputProps extends SelectInputProps, GridWrapperProps {
	enumName: keyof typeof Enums;
}

export const EnumInput: React.FC<EnumInputProps> = props => {
	const { enumName, fullWidth = true, grid, ...rest } = props;

	useValidResourceColumn(props);

	return (
		<GridWrapper grid={grid}>
			<SelectInput
				choices={enumToOptions(enumName)}
				fullWidth={fullWidth}
				variant="outlined"
				{...rest}
			/>
		</GridWrapper>
	);
};
