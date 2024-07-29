import {
	Edit,
	NumberInput,
	ReferenceInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';

export const PolicyEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
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
			</SimpleFormConfigurable>
		</Edit>
	);
};
