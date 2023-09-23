import { useState } from 'react';
import { Container } from './components/Container'
import { FormModal } from './components/FormModal'

const DUMMY_EXPENSE = [
	{
		id: 1,
		date: new Date('12 Jan, 2019'),
		name: 'Laptop',
		price: '$850',
	},
	{
		id: 2,
		date: new Date('23 Mar, 2021'),
		name: 'Monitor',
		price: '$40',
	},
	{
		id: 3,
		date: new Date('14 June, 2021'),
		name: 'Keyboard',
		price: '$150',
	},
	{
		id: 4,
		date: new Date('13 April, 2022'),
		name: 'WebCam',
		price: '$150',
	},
	{
		id: 5,
		date: new Date('16 March, 2023'),
		name: 'Keyboard',
		price: '$150',
	},
	{
		id: 6,
		date: new Date('27 January, 2023'),
		name: 'Earbuds',
		price: '$50',
	},
	{
		id: 7,
		date: new Date('14 June, 2023'),
		name: 'Pendrive',
		price: '$20',
	},
];

function App() {
	const [item, setItem] = useState(DUMMY_EXPENSE);

	const addItemHandler = (item) => {
		setItem((prevItem) => {
			return [item, ...prevItem];
		});
	};

	return (
		<>
			<FormModal onAddItem={addItemHandler} />
			<Container data={item} />
		</>
	);
}

export default App
