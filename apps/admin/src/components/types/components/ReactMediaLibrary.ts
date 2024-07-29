import { Dispatch, SetStateAction } from 'react';

import { FileLibraryListItem, FileLibraryProps } from './FileLibrary';
import { FileUploadProps } from './FileUpload';

export type ReactMediaLibraryContextType = {
	selectedItems: FileLibraryListItem[];
	setSelectedItems: Dispatch<SetStateAction<FileLibraryListItem[]>>;
} & FileLibraryProps &
	FileUploadProps;

export interface ReactMediaLibraryProps
	extends FileUploadProps,
		FileLibraryProps {
	/** Control to show or hide the modal. **/
	isOpen: boolean;
	/** Title that displays at the top of the modal. **/
	modalTitle?: string;
	/** Function that gets called when the user clicks on the close button on the top right or gray overlay background. **/
	onClose: () => void;
}
