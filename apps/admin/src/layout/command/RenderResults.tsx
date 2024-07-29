import { KBarResults, useMatches } from 'kbar';
import React from 'react';

import { ResultItem } from './ResultItem';
import { StyledGroupName } from './styled';

export interface RenderResultsProps {}

export const RenderResults: React.FC<RenderResultsProps> = () => {
	const { results, rootActionId } = useMatches();

	return (
		<KBarResults
			items={results}
			maxHeight={500}
			onRender={({ active, item }) =>
				typeof item === 'string' ? (
					<StyledGroupName>{item}</StyledGroupName>
				) : (
					<ResultItem
						action={item}
						active={active}
						currentRootActionId={rootActionId}
					/>
				)
			}
		/>
	);
};
