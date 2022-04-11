import React from 'react';
import Card from './Card';

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
				return <Card key={idx} path={path} data={data} />;
			})}
		</section>
	);
}

export default Section;
