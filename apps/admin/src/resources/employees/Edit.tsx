import SwitchLeft from '@mui/icons-material/SwitchLeftTwoTone';
import {
	AutocompleteArrayInput,
	Button,
	DateInput,
	Edit,
	EnumInput,
	ImageInput,
	LongForm,
	LongFormSection,
	PhoneInput,
	ReferenceInput,
	ReferenceManyInput,
	ReferenceManyToManyInput,
	ReferenceOneInput,
	ReferenceTypeInput,
	SimpleFormIterator,
	TabbedForm,
	TabbedFormTab,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';
import { useStore, useTranslate } from 'src/hooks';
import { minLength, required } from 'src/validation';

import { EmployeeEssentialsFooter } from './EmployeeEssentialsFooter';

export const EmployeeEdit = () => {
	const translate = useTranslate();

	const [formType, setFormType] = useStore<'long' | 'tabbed'>(
		'employees.edit.formType',
		'long',
	);

	const Form = formType === 'tabbed' ? TabbedForm : LongForm;
	const FormItem = formType === 'tabbed' ? TabbedFormTab : LongFormSection;

	return (
		<Edit
			actions={
				<Button
					label={translate('custom.action.toggle')}
					onClick={() =>
						setFormType(state => (state === 'long' ? 'tabbed' : 'long'))
					}
				>
					<SwitchLeft />
				</Button>
			}
			component="div"
			mutationMode="optimistic"
			slots={{
				essentials: {
					footer: <EmployeeEssentialsFooter />,
				},
			}}
		>
			<Form>
				<FormItem label="custom.tabs.employees.personal_information">
					<TextInput
						helperText="resources.employees.helperText.username"
						source="username"
						validate={[required()]}
					/>
					<TextInput
						source="full_name"
						validate={[required(), minLength(3)]}
					/>
					<PhoneInput
						source="phone"
						validate={[required()]}
					/>
					<EnumInput
						enumName="genders"
						source="gender"
					/>
					<DateInput source="date_of_birth" />
					<ReferenceInput
						optionText="name"
						reference="res_countries"
						source="country_of_birth_id"
					/>
					<ReferenceInput
						optionText="name"
						reference="res_cities"
						source="city_of_birth_id"
					/>
					<ImageInput source="image_id" />
					<ReferenceManyToManyInput
						reference="res_countries"
						sourceId="employee_id"
						targetId="nationality_id"
						through="join_employee_nationalities"
					>
						<AutocompleteArrayInput
							label="Nationalities"
							optionText="nationality"
						/>
					</ReferenceManyToManyInput>
				</FormItem>
				<FormItem label="custom.tabs.employees.employment_details">
					<DateInput source="date_of_hiring" />
					<DateInput source="date_of_termination" />
					<ReferenceManyToManyInput
						reference="entities"
						sourceId="employee_id"
						targetId="entity_id"
						through="join_entity_employees"
					>
						<AutocompleteArrayInput
							label="Entities"
							optionText="name"
						/>
					</ReferenceManyToManyInput>
				</FormItem>
				<FormItem
					label={translate('resources.emergency_contacts.name', {
						smart_count: 2,
					})}
				>
					<ReferenceManyInput
						reference="emergency_contacts"
						target="employee_id"
					>
						<SimpleFormIterator inline>
							<TextInput source="name" />
							<PhoneInput
								label="resources.emergency_contacts.fields.phone"
								source="phone"
								validate={required()}
							/>
							<ReferenceTypeInput
								category={Categories.EmergencyRelationships}
								label="resources.emergency_contacts.fields.relation_type_id"
								source="relation_type_id"
								validate={required()}
							/>
						</SimpleFormIterator>
					</ReferenceManyInput>
				</FormItem>
				<FormItem
					label={translate('resources.certifications.name', {
						smart_count: 2,
					})}
				>
					<ReferenceManyInput
						reference="certifications"
						target="employee_id"
					>
						<SimpleFormIterator inline>
							<TextInput
								label="resources.certifications.fields.name"
								source="name"
							/>
							<TextInput
								label="resources.certifications.fields.specialization"
								source="specialization"
							/>
							<TextInput
								label="resources.certifications.fields.level"
								source="level"
							/>
							<TextInput
								label="resources.certifications.fields.issuing_organization"
								source="issuing_organization"
							/>
							<TextInput
								label="resources.certifications.fields.credential_url"
								source="credential_url"
								type="url"
							/>
							<TextInput
								label="resources.certifications.fields.credential_number"
								source="credential_number"
							/>
							<DateInput
								label="resources.certifications.fields.date_of_issue"
								source="date_of_issue"
							/>
							<DateInput
								label="resources.certifications.fields.date_of_expiry"
								source="date_of_expiry"
							/>
						</SimpleFormIterator>
					</ReferenceManyInput>
				</FormItem>

				<FormItem
					label={translate('resources.relatives.name', {
						smart_count: 2,
					})}
				>
					<ReferenceManyInput
						reference="relatives"
						target="employee_id"
					>
						<SimpleFormIterator inline>
							<TextInput
								label="resources.relatives.fields.name"
								source="name"
							/>
							<EnumInput
								enumName="genders"
								source="gender"
							/>
							<DateInput
								label="resources.relatives.fields.date_of_birth"
								source="date_of_birth"
							/>
							<ReferenceTypeInput
								category={Categories.Relations}
								grid={{ sm: 6 }}
								source="relation_types_id"
							/>
						</SimpleFormIterator>
					</ReferenceManyInput>
				</FormItem>

				<FormItem
					label={translate('resources.identification_cards.name', {
						smart_count: 1,
					})}
				>
					<ReferenceOneInput
						reference="identification_cards"
						target="employee_id"
					>
						<ImageInput source="front_image_id" />
						<ImageInput source="back_image_id" />
						<TextInput source="id_number" />
						<TextInput source="job_title" />
						<DateInput source="date_of_issue" />
						<ReferenceInput
							optionText="name"
							reference="res_countries"
							source="place_of_issue_id"
						/>
						<DateInput source="date_of_expiry" />
					</ReferenceOneInput>
				</FormItem>
				<FormItem
					label={translate('resources.driver_licenses.name', {
						smart_count: 1,
					})}
				>
					<ReferenceOneInput
						reference="driver_licenses"
						target="employee_id"
					>
						<DateInput source="date_of_expiry" />
						<DateInput source="date_of_issue" />
						<TextInput source="license_number" />
						<TextInput source="type" />
						<ReferenceTypeInput
							category={Categories.BloodTypes}
							source="blood_type_id"
						/>
					</ReferenceOneInput>
				</FormItem>
				<FormItem
					label={translate('resources.passports.name', {
						smart_count: 1,
					})}
				>
					<ReferenceOneInput
						reference="passports"
						target="employee_id"
					>
						<DateInput source="date_of_expiry" />
						<DateInput source="date_of_issue" />
						<TextInput source="job_title" />
						<ReferenceInput
							optionText="name"
							reference="res_countries"
							source="place_of_issue_id"
						/>
					</ReferenceOneInput>
					<ReferenceManyInput
						reference="visas"
						target="employee_id"
					>
						<SimpleFormIterator inline>
							<DateInput source="from" />
							<DateInput source="to" />
							<TextInput source="id_number" />
							<ReferenceTypeInput
								category={Categories.Visas}
								source="visa_type_id"
							/>
						</SimpleFormIterator>
					</ReferenceManyInput>
				</FormItem>
				<FormItem
					label={translate('resources.residencies.name', {
						smart_count: 1,
					})}
				>
					<ReferenceOneInput
						reference="residencies"
						target="employee_id"
					>
						<DateInput source="from" />
						<DateInput source="to" />
						<ReferenceInput
							reference="res_countries"
							source="issuer_id"
						/>
					</ReferenceOneInput>
				</FormItem>
				<FormItem
					label={translate('resources.addresses.name', {
						smart_count: 2,
					})}
				>
					<ReferenceInput
						reference="res_countries"
						source="country_id"
					/>
					<ReferenceInput
						reference="res_cities"
						source="city_id"
					/>
					<TextInput source="street" />
					<TextInput source="building" />
					<TextInput source="landmark" />
				</FormItem>
			</Form>
		</Edit>
	);
};
