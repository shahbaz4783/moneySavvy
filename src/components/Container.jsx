import React from 'react';
import { Card } from './Card';

export const Container = () => {
	return (
		<>
			<Card date={'12 Jan, 2023'} item={'Laptop'} price={'$850'} />
			<Card date={'23 Mar, 2023'} item={'Mobile'} price={'$250'} />
			<Card date={'14 June, 2023'} item={'Keyboard'} price={'$30'} />
		</>
	);
};
