import {
	DetailsView,
	FileManagerComponent,
	Inject,
	NavigationPane,
	Toolbar,
} from '@syncfusion/ej2-react-filemanager';

import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-grids/styles/material.css';
import '@syncfusion/ej2-icons/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-layouts/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-react-filemanager/styles/material.css';
import '@syncfusion/ej2-splitbuttons/styles/material.css';

export const FileManager = () => {
	const hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';

	return (
		<div className="control-section">
			<FileManagerComponent
				ajaxSettings={{
					downloadUrl: hostUrl + 'api/FileManager/Download',
					getImageUrl: hostUrl + 'api/FileManager/GetImage',
					uploadUrl: hostUrl + 'api/FileManager/Upload',
					url: hostUrl + 'api/FileManager/FileOperations',
				}}
				contextMenuSettings={{
					layout: [
						'SortBy',
						'View',
						'Refresh',
						'|',
						'Paste',
						'|',
						'NewFolder',
						'|',
						'Details',
						'|',
						'SelectAll',
					],
				}}
				id="overview_file"
				toolbarSettings={{
					items: [
						'NewFolder',
						'SortBy',
						'Cut',
						'Copy',
						'Paste',
						'Delete',
						'Refresh',
						'Download',
						'Rename',
						'Selection',
						'View',
						'Details',
					],
				}}
				view="Details"
			>
				<Inject services={[NavigationPane, DetailsView, Toolbar]} />
			</FileManagerComponent>
		</div>
	);
};
