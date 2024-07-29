import SwitchLeft from '@mui/icons-material/SwitchLeftTwoTone';
import {
	AutocompleteArrayInput,
	Button,
	Create,
	ImageInput,
	LongForm,
	LongFormSection,
	NumberInput,
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
import { AddressCreate, ContactInformationCreate } from 'src/resources/commons';
export const EntityCreate = () => {
	const translate = useTranslate();
	const [formType, setFormType] = useStore<'long' | 'tabbed'>(
		`entities.edit.formType`,
		'long',
	);

	const Form = formType === 'tabbed' ? TabbedForm : LongForm;
	const FormItem = formType === 'tabbed' ? TabbedFormTab : LongFormSection;

	return (
		<Create
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
		>
			<Form>
				<FormItem label="custom.tabs.entities.entity_information">
					<TextInput source="name" />
					<TextInput source="trading_number" />
					<TextInput source="tax_number" />
					<TextInput source="activity" />
					<TextInput source="type" />
					<ReferenceInput
						reference="entity_types"
						source="entity_type_id"
					/>

					<ImageInput source="logo_id" />
					<ContactInformationCreate />
					<AddressCreate />
				</FormItem>
				<FormItem label="custom.tabs.entities.work_locations">
					<ReferenceManyInput
						reference="work_locations"
						target="entity_id"
					>
						<SimpleFormIterator inline>
							<TextInput source="name" />
							<ReferenceTypeInput
								category={Categories.Activity}
								source="activity_types_id"
							/>
							<TextInput source="employee_name" />
							<TextInput source="email" />
							<PhoneInput source="phone" />
							<TextInput source="website" />
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
						</SimpleFormIterator>
					</ReferenceManyInput>
				</FormItem>
				<FormItem label="custom.tabs.entities.employees">
					<ReferenceManyToManyInput
						reference="employees"
						sourceId="entity_id"
						targetId="employee_id"
						through="join_entity_employees"
					>
						<AutocompleteArrayInput
							label="Employees"
							optionText="full_name"
						/>
					</ReferenceManyToManyInput>
				</FormItem>
				<FormItem label="custom.tabs.entities.departments">
					<ReferenceManyInput
						reference="departments"
						target="entity_id"
					>
						<SimpleFormIterator inline>
							<TextInput source="name" />
							<TextInput source="description" />
						</SimpleFormIterator>
					</ReferenceManyInput>
				</FormItem>
				<FormItem label="custom.tabs.entities.policies">
					<ReferenceOneInput
						reference="policies"
						target="owner_id"
					>
						<NumberInput
							grid={{ lg: 4, sm: 6 }}
							source="sick_vacation"
						/>
						<NumberInput
							grid={{ lg: 4, sm: 6 }}
							source="annual_vacation"
						/>
						<NumberInput
							grid={{ lg: 4, sm: 6 }}
							source="parental_vacation"
						/>
						<NumberInput
							grid={{ lg: 4, sm: 6 }}
							source="death_vacation"
						/>
						<NumberInput
							grid={{ lg: 4, sm: 6 }}
							source="maternal_vacation"
						/>
						<NumberInput
							grid={{ lg: 4, sm: 6 }}
							source="marriage_vacation"
						/>
						<TextInput
							grid={{ sm: 6 }}
							source="work_days"
						/>
						<TextInput
							grid={{ sm: 6 }}
							source="transportation"
						/>
						<TextInput
							grid={{ sm: 6 }}
							source="nda"
						/>
						<TextInput
							grid={{ sm: 6 }}
							source="benefits"
						/>
						<ReferenceInput
							grid={{ xs: 12 }}
							optionText="to"
							reference="work_hours"
							source="work_hours_id"
						/>
					</ReferenceOneInput>
				</FormItem>
			</Form>
		</Create>
	);
};
