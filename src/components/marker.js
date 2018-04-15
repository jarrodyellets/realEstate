import React from 'react';

const Marker = (props) => {
	return (
		<div className="houseIconDiv">
			<i className="fas fa-home houseIcon"></i>
			<div className="priceMap">{props.price}</div>
		</div>
		)
}

export default Marker;