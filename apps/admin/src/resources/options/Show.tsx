import { Show, TextField } from 'src/components';

export const OptionShow = () => {
	return (
		<Show>
			<TextField source="name" />
			<TextField source="value" />
		</Show>
	);
};
