import React from 'react';
import Card from './card';

const Featured = (props) => {
	const randomProp = props.buy[7];

	return (
		<div className="featured">
			<div className="featuredTitleDiv">
				<h2 className="featuredTitle">Featured Properties</h2>
				<div>Click to see more info</div>
			</div>
			<Card img={randomProp.image}
						price={randomProp.price}
						beds={randomProp.bedrooms}
						baths={randomProp.bathrooms}
						size={randomProp.size}
						address={randomProp.address}
						/>
		</div>
		)
}

export default Featured;