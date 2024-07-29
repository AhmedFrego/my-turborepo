import { sentenceCase } from 'change-case';
import { SearchInput, SelectInput } from 'src/components';
import { Categories } from 'src/constants';
export const filters = (locale: string) => [
	<SearchInput
		key={`name->>${locale}@ilike`}
		alwaysOn
		source={`name->>${locale}@ilike`}
	/>,
	<SelectInput
		key="category"
		alwaysOn
		choices={Object.values(Categories).map(item => {
			return { id: item, name: sentenceCase(item) };
		})}
		source="category"
	/>,
];
