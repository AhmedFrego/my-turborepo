import { RedirectionSideEffect, useRedirect } from 'react-admin';
import {
	RaRecord,
	useNotify,
	useResourceContext,
	useResourceDefinition,
	useTranslate,
} from 'src/hooks';

export const useRequestMutationOptions = (
	redirectProp?: RedirectionSideEffect,
) => {
	const notify = useNotify();
	const translate = useTranslate();
	const redirect = useRedirect();
	const resource = useResourceContext();
	const { hasEdit, hasShow } = useResourceDefinition();

	const getDefaultRedirectRoute = () => {
		if (hasEdit) {
			return 'edit';
		}
		if (hasShow) {
			return 'show';
		}

		return 'list';
	};

	return {
		onSuccess: (data: RaRecord) => {
			const finalRedirectTo = redirectProp ?? getDefaultRedirectRoute();

			notify(translate('custom.common.request_created'));
			redirect(finalRedirectTo, resource, data.id, data);
		},
	};
};
