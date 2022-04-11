import React from 'react';
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
				return <article key={idx}>{data}</article>;
			})}
		</section>
	);
}

export default Section;
