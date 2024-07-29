/* eslint-disable unicorn/prefer-top-level-await */
import 'survey-core/defaultV2.min.css';
import 'survey-core/survey.i18n.js';
import isPlainObject from 'lodash/isPlainObject';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from 'src/providers';
import { Json } from 'src/types';
import { Logger } from 'src/utils';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { z } from 'zod';

const resourceSchema = z.enum(['employee_reports']).catch('employee_reports');

const surveySchema = z
	.enum(['employees_evaluation'])
	.catch('employees_evaluation');

// const recordSchema = z
// 	.object({
// 		answers: z.object({}),
// 		created_at: z.string().optional(),
// 		created_by: z.string().optional(),
// 		employee_id: z.string(),
// 		id: z.string().optional(),
// 		owner_id: z.string().optional(),
// 		quarter: z.string().optional().nullable(),
// 		updated_at: z.string().optional().nullable(),
// 		updated_by: z.string().optional().nullable(),
// 	})
// 	.partial()
// 	.catch({});

export interface MobileSurveyProps {}

export const MobileSurvey: React.FC<MobileSurveyProps> = () => {
	const [searchParams] = useSearchParams();

	const params = JSON.parse(searchParams.get('record') ?? '') as Json;
	const resource = resourceSchema.parse(searchParams.get('resource'));
	const surveyName = surveySchema.parse(searchParams.get('survey_name'));

	const handleFormSubmit = useCallback(
		async (formData: Json) => {
			const { data, error } = await supabase.from(resource).insert([
				{
					answers: formData,
					...(isPlainObject(params) ? (params as object) : {}),
					// FIXME: should come from params and validated with zod as a valid uuid
					employee_id: '',
				},
			]);

			if (error) {
				Logger.error('Error submitting form:', error);
			} else {
				Logger.log('Form submitted successfully:', data);
			}
		},
		[params, resource],
	);

	useEffect(() => {
		const fetchSurveySchema = async () => {
			const { data, error } = await supabase
				.from('surveys')
				.select('survey_schema')
				.eq('name', surveyName)
				.single();

			if (error) {
				Logger.error('Error:', error);

				return;
			}

			const schema = data?.survey_schema;

			if (schema) {
				const surveyModel = new Model(schema);

				surveyModel.onComplete.add(sender => {
					handleFormSubmit(sender.data as Json).catch(Logger.error);
				});
				setSurvey(surveyModel);
			}
		};

		fetchSurveySchema().catch(Logger.error);
	}, [handleFormSubmit, surveyName]);

	const [survey, setSurvey] = useState<Model | null>(null);

	if (!survey) {
		return null;
	}

	return <Survey model={survey} />;
};
