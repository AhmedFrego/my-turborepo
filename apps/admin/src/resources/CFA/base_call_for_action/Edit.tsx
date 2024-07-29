import React from 'react';
import {
	Edit,
	EditProps,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';

export interface BaseCallForActionEditProps
	extends EditProps,
		React.PropsWithChildren {
	footer?: React.ReactNode;
}

export const BaseCallForActionEdit: React.FC<
	BaseCallForActionEditProps
> = props => {
	const { children, footer, ...rest } = props;

	return (
		<Edit {...rest}>
			<SimpleFormConfigurable>
				<TextInput
					label="resources.base_call_for_action.fields.title"
					source="title"
				/>
				<TextInput
					multiline
					label="resources.base_call_for_action.fields.notes"
					minRows={3}
					source="notes"
				/>
				{children}
			</SimpleFormConfigurable>
			{footer}
		</Edit>
	);
};
