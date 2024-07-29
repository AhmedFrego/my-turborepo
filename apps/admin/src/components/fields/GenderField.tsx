import Man from '@mui/icons-material/ManTwoTone';
import Woman from '@mui/icons-material/WomanTwoTone';
import get from 'lodash/get';
import { useRecordContext, useValidResourceColumn } from 'src/hooks';
import { FieldProps, Genders } from 'src/types';
import { SetRequired } from 'type-fest';

export const GenderField = (props: SetRequired<FieldProps, 'source'>) => {
	const { source } = props;

	useValidResourceColumn(props);

	const record = useRecordContext(props);

	const gender = get(record, source);

	if (!gender) return null;

	return gender === Genders.male ? <Man /> : <Woman />;
};
