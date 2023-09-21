import { useState } from 'react';

export const ItemForm = (props) => {
	const [item, setItem] = useState('');
	const [price, setPrice] = useState('');
	const [date, setDate] = useState('');
  const [isValid, setIsValid] = useState(true);

	const itemHandler = (e) => {
		setItem(e.target.value);
		if (e.target.value.trim().length > 0) {
			setIsValid(true);
		}
	};
	const dateHandler = (e) => {
		setDate(e.target.value);
	};
	const priceHandler = (e) => {
		setPrice(e.target.value);
		if (e.target.value.trim().length > 0) {
			setIsValid(true);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const data = {
			name: item,
			price: price,
			date: new Date(date),
		};

		props.onSaveItemData(data);

		setItem('');
		setPrice('');
		setDate('');

		if (item.trim().length === 0) {
			setIsValid(false);
			return;
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				style={{ background: !isValid && 'pink' }}
				onChange={itemHandler}
				value={item}
				type='text'
				placeholder='Enter Item Name'
			/>
			<input
				className={`${!isValid && 'invalid'}`}
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
			<button onClick={props.onCancel}>Cancel</button>
			<button type='submit'>Add</button>
		</form>
	);
};
