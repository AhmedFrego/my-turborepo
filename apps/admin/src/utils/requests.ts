import AlarmOn from '@mui/icons-material/AlarmOnTwoTone';
import Cancel from '@mui/icons-material/CancelTwoTone';
import CheckCircle from '@mui/icons-material/CheckCircleTwoTone';
import HelpCenter from '@mui/icons-material/HelpCenterTwoTone';
import MarkChatRead from '@mui/icons-material/MarkChatReadTwoTone';
import Mode from '@mui/icons-material/ModeTwoTone';
import Preview from '@mui/icons-material/PreviewTwoTone';
import ThumbDown from '@mui/icons-material/ThumbDownTwoTone';
import { RequestStatuses } from 'src/types';

export const statusToColor = (status: string) => {
	if (!(status in RequestStatuses)) return 'primary';

	let color:
		| 'error'
		| 'info'
		| 'inherit'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning' = 'primary';

	switch (status as RequestStatuses) {
		case RequestStatuses.submitted:
		case RequestStatuses.approved: {
			color = 'success';
			break;
		}
		case RequestStatuses.rejected:
		case RequestStatuses.cancelled: {
			color = 'error';
			break;
		}
		case RequestStatuses.initial:
		case RequestStatuses.draft:
		case RequestStatuses.need_more_info: {
			color = 'info';
			break;
		}
		case RequestStatuses.in_review: {
			color = 'secondary';
			break;
		}
	}

	return color;
};

export const statusToIcon = (status: string) => {
	if (!(status in RequestStatuses)) return MarkChatRead;

	const statuses = {
		[RequestStatuses.approved]: AlarmOn,
		[RequestStatuses.cancelled]: Cancel,
		[RequestStatuses.draft]: Mode,
		[RequestStatuses.in_review]: Preview,
		[RequestStatuses.initial]: CheckCircle,
		[RequestStatuses.need_more_info]: HelpCenter,
		[RequestStatuses.rejected]: ThumbDown,
		[RequestStatuses.submitted]: MarkChatRead,
	};

	return statuses[status as RequestStatuses];
};
