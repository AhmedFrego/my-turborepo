import { FileUploadStatus } from '../utils';

export interface FileUploadProps {
	/** List of accepted [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) types. Pass empty array to accept all. **/
	acceptedTypes?: string[];
	/** Promise that gets called for every file the user attempts to upload. Return `true` or `false` depending on success. Leave empty to disable the upload tab. **/
	fileUploadCallback?: (file: File) => Promise<boolean>;
	/** Function that gets called once all the file upload promises have finished. **/
	finishUploadCallback?: (uploadFiles: FileUploadListItem[]) => void;
}

export interface FileUploadListItem {
	fileName: string;
	status: FileUploadStatus;
}
