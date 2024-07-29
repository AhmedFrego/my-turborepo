import { ReactElement } from 'react';

export interface FileLibraryListItem {
	/** Any other properties that you put in will be returned in the item data in the select, delete, & render component callbacks. **/
	[key: string]: unknown;
	/** Unique identifier for this item. Required to properly select the item in browse tab. **/
	_id: number | string;
	/** Date that the file was created. **/
	createdAt?: Date | number | string;
	/** Displayed description on card in browse tab. **/
	description?: string;
	/** Displayed filename on card in browse tab. **/
	fileName?: string;
	/** Size of file in Bytes. **/
	size?: number;
	/** URL for thumbnail to display image in browse tab. **/
	thumbnailUrl?: string;

	/** Displayed title. **/
	title?: string;
}

export interface FileLibraryProps {
	/** Default item(s) to be selected if ID is provided. **/
	defaultSelectedItemIds?: (number | string)[];
	/** Full list of items to render in the browse tab. **/
	fileLibraryList: FileLibraryListItem[];
	/** Function that gets called when the user deletes their file selection. **/
	filesDeleteCallback?: (items: FileLibraryListItem[]) => void;
	/** Function that gets called when the user submits their file selection. Leave empty to disable the browse tab. **/
	filesSelectCallback?: (items: FileLibraryListItem[]) => void;
	/** Component to render for each selectable item in the browse tab. **/
	libraryCardComponent?: (item: FileLibraryListItem) => ReactElement;
	/** Allows the user to select multiple items to submit or delete. **/
	multiSelect?: boolean;
	/** Component to render on the side with an array of selected items. **/
	selectedItemsComponent?: () => ReactElement;
	/** Control to invert the sort selection. **/
	sortAscending?: boolean;
	/** Property name to sort by. **/
	sortProperty?: 'createdAt' | 'fileName' | 'size' | 'title';
	/** Component to render at the top of the modal browse tab. Mostly used for custom search bars / filters. **/
	topBarComponent?: () => ReactElement;
}
