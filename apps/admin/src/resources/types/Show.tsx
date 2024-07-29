import { Show, TextField, TranslatableField } from 'src/components';

export const TypeShow = () => {
	return (
		<Show>
			<TranslatableField source="name" />
			<TextField source="category" />
		</Show>
	);
};
