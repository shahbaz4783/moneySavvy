import { Card } from './Card';
import { ItemFilter } from './ItemFilter';
import { useState } from 'react';

export const Container = ({ data }) => {
  const [filteredYear, setFilteredYear] = useState('2023');

	const filteredItem = data.filter((item) => {
		return item.date.getFullYear().toString() === filteredYear;
	});

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	return (
		<>
			<ItemFilter
				selected={filteredYear}
				onFilterChange={filterChangeHandler}
			/>

			{filteredItem.map((item) => (
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
