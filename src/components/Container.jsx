import { Card } from './Card';

const items = [
	{
		id: 1,
		date: '12 Jan, 2023',
		item: 'Laptop',
		price: '$850',
	},
	{
		id: 2,
		date: '23 Mar, 2023',
		item: 'Monitor',
		price: '$40',
	},
	{
		id: 3,
		date: '14 June, 2023',
		item: 'Keyboard',
		price: '$150',
	},
];

export const Container = () => {
	return (
		<>
			<Card date={items[0].date} item={items[0].item} price={items[0].price} />
			<Card date={items[1].date} item={items[1].item} price={items[1].price} />
			<Card date={items[2].date} item={items[2].item} price={items[2].price} />
		</>
	);
};
