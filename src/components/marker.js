import React from 'react';
import Card from './card';

const Marker = (props) => {
	return (
		<div className={props.stateId == props.id || props.hoverId == props.id ? "houseIconDiv selectedHouseDiv" : "houseIconDiv"}
			 	 onMouseOver={props.changeHoverId.bind(props.changeHoverId, props.id)}
			 	 onMouseLeave={props.changeHoverId.bind(props.changeHoverId, null)}>
			<div className={props.hoverId == props.id ? "housePopUp" : "hidden"}>
				<img className="popUpImg" src={props.hoverId != null ? props.neighborhood[props.hoverId].image : null} />
				<div className="popUpText">
					<div>{props.hoverId != null ? props.neighborhood[props.hoverId].price : null}</div>
					<div>{props.hoverId != null ? props.neighborhood[props.hoverId].bedrooms : null} {props.hoverId != null ? props.neighborhood[props.hoverId].bathrooms : null}</div>
					<div>{props.hoverId != null ? props.neighborhood[props.hoverId].size : null}</div>
				</div>
			</div>
			<i className={props.stateId == props.id || props.hoverId == props.id ? "fas fa-home selectedHouseIcon" : "fas fa-home houseIcon"} id={props.id}></i>
			<div className="priceMap">{props.price}</div>
		</div>
		)
}

export default Marker;
