import React from 'react';
import Card from './card';

const CardDisplay = (props) => {
	const neighborhood = props.neighborhood
	const cards = neighborhood.map((card, i) => {
		return (
				<Card img={card.image}
							price={card.price}
							beds={card.bedrooms}
							baths={card.bathrooms}
							size={card.size}
							address={card.address}
							key={i}
							/>
			)
	});

	return (
		<div className="cardDisplay">
			<div className="cardHeader">
				<h2>{props.value} Real Estate</h2>
				<div>{props.neighborhood.length} homes for sale</div>
			</div>
			{cards}
		</div>
		)
}

export default CardDisplay;