import SearchSharp from '@mui/icons-material/SearchSharp';
import { Input, InputBaseComponentProps, useTheme } from '@mui/material';
import { forwardRef } from 'react';
import { useMode } from 'src/hooks';

import { SearchBar } from './SearchBar';

export interface KBarInputProps {}

export const KBarInput: React.FC<KBarInputProps> = () => {
	const [mode] = useMode();
	const theme = useTheme();

	return (
		<Input
			inputComponent={ReffedSearchBar}
			startAdornment={<SearchSharp />}
			sx={{
				backgroundColor:
					mode === 'dark'
						? theme.palette.primary.main
						: theme.palette.background.default,
				borderRadius: '0.25rem',
				paddingLeft: 1,
				width: '100%',
			}}
		/>
	);
};

const ReffedSearchBar = forwardRef((props: InputBaseComponentProps, _ref) => (
	<SearchBar {...props} />
));

ReffedSearchBar.displayName = 'ReffedSearchBar';
