import ErrorIcon from '@mui/icons-material/ErrorTwoTone';
import NavigateBefore from '@mui/icons-material/NavigateBeforeTwoTone';
import NavigateNext from '@mui/icons-material/NavigateNextTwoTone';
import {
	Box,
	IconButton,
	Stack,
	styled,
	SxProps,
	Tooltip,
	Typography,
} from '@mui/material';
import clsx from 'clsx';
import isError from 'lodash/isError';
import { Link } from 'react-router-dom';
import { LinearProgress } from 'src/components';
import { DirectionEnum } from 'src/constants';
import {
	RaRecord,
	useLocale,
	usePreviousNextController,
	useTranslate,
} from 'src/hooks';
import { UsePrevNextControllerProps } from 'src/types';

/**
 * A component used to render the previous and next buttons in a Show or Edit view.
 *
 * The `<PrevNextButtons>` component renders navigation buttons linking to
 * the next and previous records of the current resource, the current index
 * and the total number of records.
 *
 * It uses usePrevNextController to fetch the list of records.
 *
 * `<PrevNextButtons>` can be used anywhere a record context is provided
 * (often inside a `<Show>` or `<Edit>` component).
 *
 * @example <caption>navigate to edit view by default</caption>
 * <ShowButton />
 *
 * @example <caption>navigate to show view</caption>
 * <PrevNextButtons linkType="show" />
 *
 * @example <caption>custom storeKey</caption>
 * <PrevNextButtons storeKey="listStoreKey" />
 *
 * @example <caption>limit the number of records to fetch</caption>
 * <PrevNextButtons limit={500} />
 *
 * @example <caption>customize filters and sort order</caption>
 * <PrevNextButtons
 *     linkType="show"
 *     sort={{
 *         field: 'first_name',
 *         order: 'DESC',
 *     }}
 *     filter={{ q: 'East a' }}
 * />
 *
 * @example <caption>customize style</caption>
 * <PrevNextButtons
 *     sx={{
 *         color: 'blue',
 *         '& .RaPrevNextButton-list': {
 *             marginBottom: '20px',
 *             color: 'red',
 *         },
 *     }}
 * />
 *
 * @example <caption>in an edit view</caption>
 * import React from "react";
 * import { Edit, PrevNextButtons, ShowButton, SimpleForm, TopToolbar } from 'react-admin';
 *
 * const MyTopToolbar = ({ children }) => (
 *     <TopToolbar>
 *         {children}
 *     </TopToolbar>
 * );
 *
 * export const PostEdit = () => (
 *      <Edit
 *          actions={
 *              <MyTopToolbar>
 *                  <PrevNextButtons
 *                      sort={{
 *                          field: 'first_name',
 *                          order: 'DESC',
 *                      }}
 *                      filter={{ q: 'East a' }}
 *                  />
 *                  <ShowButton />
 *              </MyTopToolbar>
 *          }
 *      >
 *          <SimpleForm>...</SimpleForm>
 *      </Edit>
 * );
 */

export const PreviousNextButtons = <RecordType extends RaRecord = RaRecord>(
	props: PreviousNextButtonProps<RecordType>,
) => {
	const { sx } = props;
	const { direction } = useLocale();
	const isLtr = direction === DirectionEnum.ltr;

	const {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		error,
		hasNext,
		hasPrev,
		index,
		isLoading,
		nextPath,
		prevPath,
		total,
	} = usePreviousNextController<RecordType>(props);

	const translate = useTranslate();

	if (isLoading) {
		return (
			<Box
				alignItems="center"
				display="flex"
				minHeight={34}
			>
				<LinearProgress />
			</Box>
		);
	}

	if (isError(error)) {
		return (
			<ErrorIcon
				aria-errormessage={error.message}
				color="error"
				fontSize="small"
				titleAccess="error"
			/>
		);
	}

	if (!hasPrev && !hasNext) {
		return <Box minHeight={34} />;
	}

	return (
		<Root
			as="nav"
			className={clsx(PreviousNextButtonClasses.root)}
			direction="row"
			sx={sx}
		>
			<Tooltip title={hasPrev ? translate('navigation.previous_item') : null}>
				<span>
					<IconButton
						aria-label={translate('navigation.previous_item')}
						// @ts-ignore - pass
						component={hasPrev ? Link : undefined}
						disabled={!hasPrev}
						size="small"
						to={prevPath}
					>
						{isLtr ? <NavigateBefore /> : <NavigateNext />}
					</IconButton>
				</span>
			</Tooltip>

			{typeof index === 'number' && (
				<Typography variant="body2">
					{index + 1} / {total}
				</Typography>
			)}

			<Tooltip title={hasNext ? translate('navigation.next_item') : null}>
				<span>
					<IconButton
						aria-label={translate('navigation.next_item')}
						// @ts-ignore - pass
						component={hasNext ? Link : undefined}
						disabled={!hasNext}
						size="small"
						to={nextPath}
					>
						{isLtr ? <NavigateNext /> : <NavigateBefore />}
					</IconButton>
				</span>
			</Tooltip>
		</Root>
	);
};

export interface PreviousNextButtonProps<RecordType extends RaRecord = RaRecord>
	extends UsePrevNextControllerProps<RecordType> {
	sx?: SxProps;
}

const PREFIX = 'RaPrevNextButton';

const PreviousNextButtonClasses = {
	root: `${PREFIX}-root`,
};

const Root = styled(Stack, {
	name: PREFIX,
	overridesResolver: (_props, styles) => styles.root,
})(({ theme }) => ({
	alignItems: 'center',
	display: 'inline-flex',
	gap: theme.spacing(1),
}));
