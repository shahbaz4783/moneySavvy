export const ItemForm = () => {
	return (
		<form>
			<input type='text' placeholder='Enter Item Name' />
			<input type='number' placeholder='Enter Amount' />
			<input
				type='date'
				min={'2016-01-01'}
				max={'2023-12-31'}
				placeholder='Choose Date'
			/>
			<button type='submit'>Add</button>
		</form>
	);
};
