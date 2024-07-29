import { Create, ReferenceInput, SimpleFormConfigurable } from 'src/components';

import { validateSponsorForm } from './validate';

export const SponsorCreate = () => {
	return (
		<Create>
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
		</Create>
	);
};
