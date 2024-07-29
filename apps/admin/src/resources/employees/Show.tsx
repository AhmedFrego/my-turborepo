import {
	DateField,
	ReferenceField,
	ReferenceManyField,
	Show,
	TextField,
	WithListContext,
} from 'src/components';
import { useTranslate } from 'src/hooks';
import { Tables } from 'src/types';
import { determineEmployeeSocialStatus } from 'src/utils';

import { EmployeeEssentialsFooter } from './EmployeeEssentialsFooter';
import { ShowHeader } from './ShowHeader';

export const EmployeeShow = () => {
	const translate = useTranslate();

	return (
		<Show
			slots={{
				essentials: {
					footer: <EmployeeEssentialsFooter />,
				},
				layout: {
					header: <ShowHeader />,
				},
			}}
		>
			<TextField source="username" />
			<ReferenceField
				reference="sponsors"
				source="sponsor_id"
			/>
			<TextField source="gender" />
			<ReferenceManyField
				label={translate(`custom.calculated_fields.social_status`, {
					smart_count: 2,
				})}
				reference="marriages"
				target="employee_id"
			>
				<WithListContext<Tables<'marriages'>>
					render={({ data }) => (
						<p>
							{translate(
								`custom.marriage_status.${determineEmployeeSocialStatus(data)}`,
							)}
						</p>
					)}
				/>
			</ReferenceManyField>
			<DateField source="date_of_birth" />
			<ReferenceField
				reference="res_countries"
				source="country_of_birth_id"
			/>
			<DateField source="date_of_hiring" />
			<TextField source="date_of_termination" />
			<ReferenceField
				reference="insurance_plans"
				source="insurance_plan_id"
			/>
			{/* <TextField source="full_name" /> */}
			{/* <ReferenceField
				reference="res_cities"
				source="city_of_birth_id"
			/> */}
			{/* <ReferenceField
				reference="images"
				source="image_id"
			/> */}
			{/* <TextField source="phone" /> */}
		</Show>
	);
};
