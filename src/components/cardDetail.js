import React from 'react';

const CardDetail = (props) => {
	const cardStyle = {backgroundImage: 'url(' + props.house.image + ')'}
	return(
		<div className="blackout">
			<div className="detailContainer">
				<div className="detailNav">
					<img className="detailLogo" src="https://www.jarrodyellets.com/images/pillow/pillowLogo.jpg" />
				  <i onClick={props.changeDetail} className="fas fa-times closeIcon"></i>
				</div>
				<div className="detailImage" style={cardStyle}></div>
				<div className="detailHouse">
					<div className="detailPrice">{props.house.price}{props.mode == "rent" ? "/mo" : "" }</div>
					<div className="detailDetails">
						<span className="detailBeds">{props.house.bedrooms} </span>
						<span className="detailBaths">{props.house.bathrooms} </span>
						<span className="detailSize">{props.house.size}</span>
					</div> 
					<div className="detailAddress">{props.house.address} Austin, TX</div>
				</div>
			</div>
		</div>
		)
}

export default CardDetail;