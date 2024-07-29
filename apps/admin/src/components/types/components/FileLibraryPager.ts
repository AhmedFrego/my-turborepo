export interface FileLibraryPagerProps {
	count: number;
	itemsPerPage: number;
	offsetDisplay?: number;
	page: number;
	pagerCallback: (number: number) => void;
}
