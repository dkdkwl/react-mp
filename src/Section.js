import React from 'react';
const path = process.env.PUBLIC_URL;
const arr = [
	'Blizzards',
	'Calm',
	'Dusty_Road',
	'Escape',
	'Payday',
	'Retreat',
	'Seasonal',
	'Vespers',
];

function Section() {
	return (
		<section className='wrap'>
			{arr.map((data, idx) => {
				return (
					<article key={idx}>
						<div className='pic'>
							<img src={`${path}/img/${data}.jpg`} />
						</div>
						{data}
					</article>
				);
			})}
		</section>
	);
}

export default Section;
