import { Card } from './Card';
import { ItemFilter } from './ItemFilter';

export const Container = ({ data }) => {
	return (
		<>
			<ItemFilter />

			{data.map((item) => (
				<Card
					key={item.id}
					date={item.date.toLocaleDateString()}
					item={item.name}
					price={item.price}
				/>
			))}
		</>
	);
};
