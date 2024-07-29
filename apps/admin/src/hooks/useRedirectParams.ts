import queryString from 'query-string';

export const useRedirectParams = () => {
	const query = queryString.parseUrl(window.location.href).query;

	if (Object.keys(query).length === 0) {
		return '/';
	}

	return query.redirect;
};
