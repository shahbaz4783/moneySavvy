export const Card = ({ date, item, price }) => {

  return (
		<div class='task'>
			<div class='tags'>
				<span class='tag'>{date}</span>
			</div>
			<h3>{item}</h3>
			<p>
				This is description of the purchase. This is description of the purchase
			</p>
			<div class='stats'>
				<div>
					<h2>{price}</h2>
				</div>
			</div>
		</div>
	);
}