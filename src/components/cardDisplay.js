import React from 'react';
import Card from './card';

const CardDisplay = (props) => {
	const neighborhood = props.neighborhood
	const cards = neighborhood.map((card, i) => {
		return (
			<div className="cardDiv" key={i}>
				<Card img={card.image}
							price={card.price}
							beds={card.bedrooms}
							baths={card.bathrooms}
							size={card.size}
							address={card.address}
							/>
			</div>
			)
	});

	return <div className="cardDisplay">{cards}</div>
}

export default CardDisplay;