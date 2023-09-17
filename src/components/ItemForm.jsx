import { useState } from 'react';

export const ItemForm = (props) => {
	const [item, setItem] = useState('');
	const [price, setPrice] = useState('');
	const [date, setDate] = useState('');

	const itemHandler = (e) => {
		setItem(e.target.value);
	};
	const dateHandler = (e) => {
		setDate(e.target.value);
	};
	const priceHandler = (e) => {
		setPrice(e.target.value);
	};

  const submitHandler = (e) => {
		e.preventDefault();
		const data = {
			item: item,
			price: price,
			date: new Date(date),
		};
    
    props.onSaveItemData(data);

		setItem('');
		setPrice('');
		setDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				onChange={itemHandler}
				value={item}
				type='text'
				placeholder='Enter Item Name'
			/>
			<input
				onChange={priceHandler}
				value={price}
				type='number'
				placeholder='Enter Amount'
			/>
			<input
				onChange={dateHandler}
				type='date'
				min={'2016-01-01'}
				max={'2023-12-31'}
				placeholder='Choose Date'
				value={date}
			/>
			<button type='submit'>Add</button>
		</form>
	);
};
