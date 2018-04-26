import React from 'react';
import Card from './card';

const Featured = (props) => {
	const house1 = props.mode == "buy" ? props.buy[43] : props.rent[22];
	const house2 = props.mode == "buy" ? props.buy[55] : props.rent[5];

	return (
		<div className="featured">
			<div className="featuredTitleDiv">
				<h2 className="featuredTitle">Featured Properties</h2>
				<div>Click to see more info</div>
			</div>
			<div className="featuredCardDiv">
			 	<div className="leftHouse featuredHouse">
					<img className="detailImage" src={house1.image} />
					<div className="detailHouseFeatured">
						<div className="detailPrice">{house1.price}{props.mode == "rent" ? "/mo" : ""}</div>
						<div className="detailDetails">
							<span className="detailBeds">{house1.bedrooms} </span>
							<span className="detailBaths">{house1.bathrooms} </span>
							<span className="detailSize">{house1.size}</span>
						</div> 
						<div className="detailAddress">{house1.address} Austin, TX</div>
					</div>
				</div>
				<div className="rightHouse featuredHouse">
					<img className="detailImage" src={house2.image} />
					<div className="detailHouseFeatured">
						<div className="detailPrice">{house2.price}{props.mode == "rent" ? "/mo" : ""}</div>
						<div className="detailDetails">
							<span className="detailBeds">{house2.bedrooms} </span>
							<span className="detailBaths">{house2.bathrooms} </span>
							<span className="detailSize">{house2.size}</span>
						</div> 
						<div className="detailAddress">{house2.address} Austin, TX</div>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Featured;