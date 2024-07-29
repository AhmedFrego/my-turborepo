import { InputBaseComponentProps } from '@mui/material';
import { useMode } from 'src/hooks';

import { StyledKBarSearch } from './styled';

export interface SearchBarProps extends InputBaseComponentProps {}

export const SearchBar: React.FC<SearchBarProps> = props => {
	const [mode] = useMode();

	return (
		<StyledKBarSearch
			{...props}
			sx={{
				backgroundColor: 'transparent',
				borderBottom: '2px solid rgba(149, 157, 165, 0.2)',
				borderWidth: 0,
				color: mode === 'dark' ? '#f0f0f0' : '#111',
				fontSize: '1.5rem',
				outline: 0,
				padding: '1rem 0.5rem',
				width: '100%',
			}}
		/>
	);
};
