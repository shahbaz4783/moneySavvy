import { useState } from 'react';

export const ItemForm = ({ onSaveItemData , onCancel}) => {
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

		onSaveItemData(data);

		setItem('');
		setPrice('');
		setDate('');

		if (item.trim().length === 0) {
			setIsValid(false);
			return;
		}
	};

	return (
		<>
			<form onSubmit={submitHandler}>
				<div class='container'>
					<div class='modal'>
						<div class='modal__header'>
							<span class='modal__title'>New project</span>
							<button class='button button--icon'>
								<svg
									width='24'
									viewBox='0 0 24 24'
									height='24'
									xmlns='http://www.w3.org/2000/svg'
									onClick={onCancel}
								>
									<path fill='none' d='M0 0h24v24H0V0z'></path>
									<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'></path>
								</svg>
							</button>
						</div>
						<div class='modal__body'>
							<div class='input'>
								<label class='input__label'>Item Name</label>
								<input
									class='input__field'
									type='text'
									onChange={itemHandler}
									value={item}
								/>
								<p class='input__description'>
									The title must contain a maximum of 32 characters
								</p>
							</div>
							<div class='input'>
								<label class='input__label'>Enter Amount</label>
								<input
									class='input__field'
									type='number'
									onChange={priceHandler}
									value={price}
								/>
								<p class='input__description'>
									The title must contain a maximum of 32 characters
								</p>
							</div>
							<div class='input'>
								<label class='input__label'>Enter Date</label>
								<input
									class='input__field'
									type='date'
									onChange={dateHandler}
									value={date}
								/>
								<p class='input__description'>
									The title must contain a maximum of 32 characters
								</p>
							</div>
							<div class='input'>
								<label class='input__label'>Description</label>
								<textarea class='input__field input__field--textarea'></textarea>
								<p class='input__description'>
									Give your project a good description so everyone know what's
									it for
								</p>
							</div>
						</div>
						<div class='modal__footer'>
							<button class='button button--primary'>Add</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};
