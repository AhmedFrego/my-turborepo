import { ValidateForm } from 'react-admin';
import { Tables } from 'src/types';

export const validateSponsorForm: ValidateForm = values => {
	const errors: Partial<Record<keyof Tables<'sponsors'>, string>> = {};

	if (!values.entity_id && !values.employee_id) {
		const error = 'choose one';

		errors.entity_id = error;
		errors.employee_id = error;
	}

	if (values.entity_id && values.employee_id) {
		const error = 'only one';

		errors.entity_id = error;
		errors.employee_id = error;
	}

	return errors;
};
