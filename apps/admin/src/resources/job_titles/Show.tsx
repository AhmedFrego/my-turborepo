import { Show, TranslatableField } from 'src/components';

export const JobTitleShow = () => {
	return (
		<Show>
			<TranslatableField source="name" />
		</Show>
	);
};
