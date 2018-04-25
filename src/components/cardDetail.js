import React from 'react';

const CardDetail = (props) => {
	return(
		<div className="detailContainer">
			<div className="detailNav">
				<div className="closeDetail" onClick={props.changeDetail}><i class="fas fa-times"></i></div>
			</div>
			<img className="detailImage" src={props.house.image} />
			<div className="detailAddress">{props.house.address}</div>
			<div className="detailPrice">{props.house.price}</div>
			<div className="detailDetails">
				<span className="detailBeds">{props.house.bedrooms}</span>
				<span className="detailBaths">{props.house.bathrooms}</span>
				<span className="detailSize">{props.house.size}</span>
			</div> 
		</div>
		)
}

export default CardDetail;