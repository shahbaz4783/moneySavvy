import { Card } from './Card';

export const Container = ({ data }) => {
	return (
		<>
			{data.map((item) => (
				<Card
					date={item.date.toLocaleDateString()}
					item={item.name}
					price={item.price}
				/>
			))}
		</>
	);
};
