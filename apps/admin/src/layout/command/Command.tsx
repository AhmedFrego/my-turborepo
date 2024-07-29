import { KBarPortal } from 'kbar';
import React from 'react';

import { Footer } from './Footer';
import { RenderResults } from './RenderResults';
import { SearchBar } from './SearchBar';
import { StyledKBarAnimator, StyledKBarPositioner } from './styled';

export interface CommandProps {}

export const Command: React.FC<CommandProps> = () => {
	return (
		<KBarPortal>
			<StyledKBarPositioner>
				<StyledKBarAnimator>
					<SearchBar />
					<RenderResults />
					<Footer />
				</StyledKBarAnimator>
			</StyledKBarPositioner>
		</KBarPortal>
	);
};
