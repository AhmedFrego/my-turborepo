import 'react-datepicker/dist/react-datepicker.min.css';

import clsx from 'clsx';
import { InputProps, sanitizeInputRestProps } from 'react-admin';
import DatePicker from 'react-datepicker';
import { useLocale } from 'src/hooks';

import { useInput } from '../useInput';

export interface QuarterInputProps extends InputProps<Date> {
	defaultValue?: Date;
}

/**
 * Custom input component for selecting quarters.
 */
export const QuarterInput: React.FC<QuarterInputProps> = props => {
	const {
		defaultValue = new Date(),
		name,
		onBlur,
		onChange,
		parse,
		resource,
		source,
		...rest
	} = props;

	const { fns } = useLocale();

	const { field, id, isRequired } = useInput({
		defaultValue,
		name,
		onBlur,
		onChange,
		parse,
		resource,
		source,
		...rest,
	});

	return (
		<DatePicker
			{...sanitizeInputRestProps(rest)}
			ref={field.ref}
			showQuarterYearPicker
			className={clsx('ra-input', `ra-input-${source}`)}
			dateFormat="yyyy, QQQ"
			disabled={field.disabled}
			id={id}
			locale={fns}
			name={name}
			required={isRequired}
			selected={field.value ? new Date(String(field.value)) : null}
			onChange={field.onChange}
		/>
	);
};
