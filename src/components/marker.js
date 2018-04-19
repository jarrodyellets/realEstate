import React from 'react';
import Card from './card';

const Marker = (props) => {
	const popUp = props.neighborhood.filter(function(house){
		return house.lng == props.lng;
	});
	return (
		<div className={props.stateId == props.id ? "houseIconDiv selectedHouseDiv" : "houseIconDiv"} 
			 	 onMouseOver={props.changeId.bind(props.changeId, props.id)} 
			 	 onMouseLeave={props.changeId.bind(props.changeId, null)}>
			<div className="housePopUp">
				
			</div>
			<i className={props.stateId == props.id ? "fas fa-home selectedHouseIcon" : "fas fa-home houseIcon"} id={props.id}></i>
			<div className="priceMap">{props.price}</div>
		</div>
		)
}

export default Marker;