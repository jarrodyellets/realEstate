import React from 'react';
import Card from './card';

const Featured = (props) => {
	const randomProp = props.buy[7];
	const randomRent = props.buy[29];

	return (
		<div className="featured">
			<div className="featuredTitleDiv">
				<h2 className="featuredTitle">Featured Properties</h2>
				<div>Click to see more info</div>
			</div>
			<div className="featuredCardDiv">
				<Card img={randomProp.image}
							price={randomProp.price}
							beds={randomProp.bedrooms}
							baths={randomProp.bathrooms}
							size={randomProp.size}
							address={randomProp.address}
							/>
				<Card img={randomRent.image}
							price={randomRent.price}
							beds={randomRent.bedrooms}
							baths={randomRent.bathrooms}
							size={randomRent.size}
							address={randomRent.address}
							/>
			</div>
		</div>
		)
}

export default Featured;