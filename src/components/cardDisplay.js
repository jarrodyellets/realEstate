import React from 'react';
import Card from './card';

const CardDisplay = (props) => {
	const neighborhood = props.buy
	const cards = neighborhood.map((card, i) => {
		return (
			<Card img={card.image}
						price={card.price}
						beds={card.bedrooms}
						baths={card.bathrooms}
						size={card.size}
						address={card.address}
						/>
			)
	});

	return <div className="cardDisplay">{cards}</div>
}

export default CardDisplay;