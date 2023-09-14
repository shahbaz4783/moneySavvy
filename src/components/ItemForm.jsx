import { useState } from 'react';

export const ItemForm = () => {
	const [item, setItem] = useState('');
	const [price, setPrice] = useState('');
	const [date, setDate] = useState('');

	const itemHandler = (e) => {
		setItem(e.target.value);
	};
	const dateHandler = (e) => {
		setPrice(e.target.value);
	};
	const priceHandler = (e) => {
		setDate(e.target.value);
	};

	return (
		<form>
			<input onChange={itemHandler} type='text' placeholder='Enter Item Name' />
			<input onChange={priceHandler} type='number' placeholder='Enter Amount' />
			<input
				onChange={dateHandler}
				type='date'
				min={'2016-01-01'}
				max={'2023-12-31'}
				placeholder='Choose Date'
			/>
			<button type='submit'>Add</button>
		</form>
	);
};
