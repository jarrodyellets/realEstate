import React from 'react';

const Marker = (props) => {
	let className = props.stateId == props.id ? "fas fa-home selectedHouseIcon" : "fas fa-home houseIcon";
	return (
		<div className={props.stateId == props.id ? "houseIconDiv selectedHouseDiv" : "houseIconDiv"} >
			<i className={className} id={props.id}></i>
			<div className="priceMap">{props.price}</div>
		</div>
		)
}

export default Marker;