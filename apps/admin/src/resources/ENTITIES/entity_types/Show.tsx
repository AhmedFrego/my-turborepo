import { Show, TextField, TranslatableField } from 'src/components';

export const EntityTypeShow = () => {
	return (
		<Show>
			<TextField source="level" />
			<TranslatableField source="name" />
			<TextField source="slug" />
			<TextField source="description" />
		</Show>
	);
};
