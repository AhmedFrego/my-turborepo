import Warning from '@mui/icons-material/WarningTwoTone';
import { CardWithIcon, CardWithIconProps, Count } from 'src/components';
import { useCreatePath } from 'src/hooks';
import { TranslationsPaths } from 'src/locales';
import { NonJoinPublicTables, Tables } from 'src/types';

export interface NearExpiryResourceCardProps<
	T extends NonJoinPublicTables = NonJoinPublicTables,
> extends Partial<Omit<CardWithIconProps, 'title'>> {
	/**Field representing the expiry date in the resource table
	 * @example field="date"
	 */
	field: keyof Tables<T>;
	/**Upper limit for the expiry date
	 * @example lte="example"
	 */
	lte: string;
	/**Resource Name
	 * @example resource="source_name"
	 */
	resource: T;
	/**Title of the card, translated using the application's translation function
	 * @example title: "Title";
	 */
	title: TranslationsPaths;
}
/**The component is a React component designed to display a card with an icon indicating a warning status. It is specifically tailored for resources that are near their expiry */
export const NearExpiryResourceCard = <
	T extends NonJoinPublicTables = NonJoinPublicTables,
>(
	props: NearExpiryResourceCardProps<T>,
) => {
	const { field, lte, resource, title, ...rest } = props;
	const createPath = useCreatePath();

	const filter = { [`${String(field)}@lte`]: lte };

	return (
		<CardWithIcon
			color="warning"
			icon={<Warning fontSize="large" />}
			subtitle={
				<Count
					filter={filter}
					resource={resource}
					sx={{
						font: 'inherit',
						fontSize: 'inherit',
					}}
				/>
			}
			title={title}
			to={{
				pathname: createPath({ resource }),
				search: `filter=${JSON.stringify(filter)}`,
			}}
			{...rest}
		/>
	);
};
