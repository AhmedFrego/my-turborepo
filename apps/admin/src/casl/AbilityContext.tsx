import { createMongoAbility } from '@casl/ability';
import { createContext } from 'react';
import { useRolesContext } from 'src/hooks';

export type CaslActions = 'manage';
export type CaslSubjects = 'all';

const defaultAbility = createMongoAbility<[CaslActions, CaslSubjects]>();

export const AbilityContext = createContext(defaultAbility);

export interface AbilityProviderProps {}

export const AbilityProvider: React.FC<
	React.PropsWithChildren<AbilityProviderProps>
> = props => {
	const { children } = props;

	const { permissions } = useRolesContext();

	const ability = createMongoAbility<[CaslActions, CaslSubjects]>(permissions);

	return (
		<AbilityContext.Provider value={ability}>
			{children}
		</AbilityContext.Provider>
	);
};
