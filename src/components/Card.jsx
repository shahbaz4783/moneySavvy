export const Card = ({ date, item, price }) => {

  return (
		// <div className='card'>
		// 	<p>{date}</p>
		// 	<h3>{item}</h3>
		// 	<p>{price}</p>
		<div class='task' draggable='true'>
			<div class='tags'>
				<span class='tag'>Electronics</span>
			</div>
			<h3>{item}</h3>
			<p>
				This is description of the purchase. This is description of the purchase
			</p>
			<div class='stats'>
				<div>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
						>
							<g stroke-width='0' id='SVGRepo_bgCarrier'></g>
							<g
								stroke-linejoin='round'
								stroke-linecap='round'
								id='SVGRepo_tracerCarrier'
							></g>
							<g id='SVGRepo_iconCarrier'>
								{' '}
								<path
									stroke-linecap='round'
									stroke-width='2'
									d='M12 8V12L15 15'
								></path>{' '}
								<circle stroke-width='2' r='9' cy='12' cx='12'></circle>{' '}
							</g>
						</svg>
						{date}
					</div>
				</div>
			</div>
		</div>
		// </div>
	);
}