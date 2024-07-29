import {
	ReferenceField,
	ReferenceTypeField,
	Show,
	TextField,
} from 'src/components';

import { AddressShow, ContactInformationShow } from '../commons';

export const WorkLocationShow = () => {
	return (
		<Show>
			<TextField source="name" />
			<ReferenceTypeField source="activity_types_id" />
			{...ContactInformationShow}
			{...AddressShow}
			<ReferenceField
				reference="entities"
				source="entity_id"
			/>
		</Show>
	);
};
