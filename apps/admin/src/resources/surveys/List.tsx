import { useBasename } from 'react-admin';
import { List, TextField } from 'src/components';
import { useTranslate } from 'src/hooks';

import { filters } from './Filters';
import { PreviewSurveyIcon } from './PreviewSurveyIcon';

export const SurveyList = () => {
	const translate = useTranslate();
	const basename = useBasename();

	return (
		<List
			dataGridProps={{
				rowClick: id => `${basename}/surveys/${id}/analytics`,
				slots: {
					rowActions: <PreviewSurveyIcon />,
				},
			}}
			filters={filters}
		>
			<TextField source="name" />
			<TextField
				label={translate('custom.surveys.surveyTitle')}
				source="survey_schema.title.default"
			/>
		</List>
	);
};
