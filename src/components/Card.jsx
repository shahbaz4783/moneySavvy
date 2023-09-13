import { useState } from "react";

export const Card = ({ date, item, price }) => {
	const [title, setTitle] = useState(item)
	const btnHandler = () => {
		setTitle('Changed!')
	}
	
  return (
		<div className="card">
			<p>{date}</p>
			<h3>{title}</h3>
			<p>{price}</p>
			<button onClick={btnHandler}>Change Title</button>
		</div>
	);
}