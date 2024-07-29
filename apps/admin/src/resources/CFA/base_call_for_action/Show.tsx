import React from 'react';
import { Show, ShowProps, TextField } from 'src/components';
import { SetOptional } from 'type-fest';

export interface BaseCallForActionShowProps
	extends SetOptional<ShowProps, 'children'> {}

export const BaseCallForActionShow: React.FC<
	BaseCallForActionShowProps
> = props => {
	const { children, ...rest } = props;

	return (
		<Show {...rest}>
			<TextField
				label="resources.base_call_for_action.fields.title"
				source="title"
			/>
			<TextField
				label="resources.base_call_for_action.fields.notes"
				source="notes"
			/>
			{children}
		</Show>
	);
};
