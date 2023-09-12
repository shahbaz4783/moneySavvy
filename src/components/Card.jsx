export const Card = ({ date, item, price }) => {
  return (
		<div className="card">
			<p>{date}</p>
			<h3>{item}</h3>
			<p>{price}</p>
		</div>
	);
}