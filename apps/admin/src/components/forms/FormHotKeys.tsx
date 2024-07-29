import { SimpleFormConfigurableProps as RASimpleFormConfigurableProps } from 'react-admin';
import { useFormContext } from 'react-hook-form';
import { RaRecord, useHotkeys, useSaveContext } from 'src/hooks';
import { Logger } from 'src/utils';

import { ToolbarProps } from '../Toolbar';

export interface SimpleFormConfigurableProps
	extends RASimpleFormConfigurableProps {
	toolbarProps?: ToolbarProps;
}

export const FormHotKeys = () => {
	const form = useFormContext();
	const saveContext = useSaveContext();

	const { formState, handleSubmit } = form ?? {};
	const { isDirty, isValid } = formState ?? {};

	const submitCallback = async (values: Partial<RaRecord>) => {
		if (saveContext?.save) {
			await saveContext.save(values);
		}
	};

	const submitEvent = async () => {
		try {
			await handleSubmit(submitCallback)();
		} catch (error) {
			Logger.error(error);
		}
	};

	useHotkeys('edit.SUBMIT_ITEM', () => {
		if (isDirty && isValid) {
			submitEvent()?.catch(Logger.error);
		}
	});

	return null;
};
