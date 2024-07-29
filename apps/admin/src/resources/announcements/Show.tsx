import { Show, TextField } from 'src/components';

export const AnnouncementShow = () => {
	return (
		<Show>
			<TextField source="title" />
			<TextField source="message" />
			<TextField source="level" />
		</Show>
	);
};
