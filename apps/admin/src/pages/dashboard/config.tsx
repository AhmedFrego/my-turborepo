import { NearExpiryResourceCard } from 'src/components';
import { monthDuration } from 'src/utils';

import { PendingRequests } from './PendingRequests';
import { RegisteredAccounts } from './RegisteredAccounts';
import { RegisteredRelatives } from './RegisteredRelatives';

const lte = monthDuration();

export const config: Record<string, { component: JSX.Element }> = {
	near_expiry_driver_licenses: {
		component: (
			<NearExpiryResourceCard
				field="date_of_expiry"
				lte={lte}
				resource="driver_licenses"
				title="dashboard_cards.near_expiry.driver_licenses"
			/>
		),
	},
	near_expiry_identification_card: {
		component: (
			<NearExpiryResourceCard
				field="date_of_expiry"
				lte={lte}
				resource="identification_cards"
				title="dashboard_cards.near_expiry.identification_card"
			/>
		),
	},
	near_expiry_passports: {
		component: (
			<NearExpiryResourceCard
				field="date_of_expiry"
				lte={lte}
				resource="passports"
				title="dashboard_cards.near_expiry.passports"
			/>
		),
	},
	near_expiry_residencies: {
		component: (
			<NearExpiryResourceCard
				field="to"
				lte={lte}
				resource="residencies"
				title="dashboard_cards.near_expiry.residencies"
			/>
		),
	},
	pending_requests: {
		component: <PendingRequests />,
	},
	registered_accounts: {
		component: <RegisteredAccounts />,
	},
	registered_relatives: {
		component: <RegisteredRelatives />,
	},
};
