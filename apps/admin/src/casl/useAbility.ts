import { useAbility as useBaseAbility } from '@casl/react';

import { AbilityContext } from './AbilityContext';

export const useAbility = () => useBaseAbility(AbilityContext);
