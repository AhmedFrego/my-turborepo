import { Edit, ReferenceInput, SimpleFormConfigurable } from 'src/components';

import { validateSponsorForm } from './validate';

export const SponsorEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable validate={validateSponsorForm}>
				<ReferenceInput
					reference="entities"
					source="entity_id"
				/>
				<ReferenceInput
					reference="employees"
					source="employee_id"
				/>
			</SimpleFormConfigurable>
		</Edit>
	);
};
