import PollTwoTone from '@mui/icons-material/PollTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { SurveyAnswerEdit } from './Edit';
import { SurveyAnswerList } from './List';
import { SurveyAnswerShow } from './Show';

export const SurveyAnswers = managed_admin({
	edit: SurveyAnswerEdit,
	hasCreate: false,
	icon: PollTwoTone,
	list: SurveyAnswerList,
	name: 'survey_answers',
	show: SurveyAnswerShow,
});
