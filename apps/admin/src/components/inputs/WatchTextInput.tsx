import { sentenceCase } from 'change-case';
import { useWatch } from 'react-hook-form';

import { TextInput, TextInputProps } from './TextInput';

export const WatchTextInput = (props: { watch: string } & TextInputProps) => {
	const { watch, ...rest } = props;

	const slug = useWatch<{ [K: typeof watch]: string }>({ name: watch });

	return (
		<TextInput
			format={(record: string) => {
				if (record) return record;
				else if (typeof slug === 'string') {
					record = sentenceCase(slug);

					return record;
				} else return record;
			}}
			{...rest}
		/>
	);
};
