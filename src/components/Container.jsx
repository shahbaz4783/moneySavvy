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
      {items.map(item => <Card date={item.date} item={item.item} price={item.price} />)}
		</>
	);
};
