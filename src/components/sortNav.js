import React from 'react';

const SortNav = (props) => {
	return (
		<div className="sortNav">
			<select value={props.value} onChange={props.changeValue} className="sortSelect ">
				<option value="Austin">All Neighborhoods &#9660;</option>
				<option value="Downtown">Downtown</option>
				<option value="Travis Heights">Travis Heights</option>
				<option value="East Austin">East Austin</option>
				<option value="Rollingwood">Rollingwood</option>
				<option value="Barton Hills">Barton Hills</option>
				<option value="Westlake">Westlake</option>
				<option value="Tarrytown">Tarrytown</option>
				<option value="Hyde Park">Hyde Park</option>
				<option value="West Campus">West Campus</option>
			</select>
			<select value={props.price} onChange={props.changePrice} className="sortSelect ">
				<option value="price" disabled>Price Max &#9660;</option>
				<option value="250000">$250,000</option>
				<option value="350000">$350,000</option>
				<option value="500000">$500,000</option>
				<option value="600000">$600,000</option>
				<option value="750000">$750,000</option>
				<option value="850000">$850,000</option>
				<option value="1000000">$1,000,000</option>
				<option value="price">All</option>
			</select>
			<select value={props.beds} onChange={props.changeBeds} className="sortSelect ">
				<option value="beds">All Bedrooms &#9660;</option>
				<option value="1 bd">1</option>
				<option value="2 bds">2</option>
				<option value="3 bds">3</option>
				<option value="4 bds">4</option>
				<option value="5 bds">5+</option>
			</select>
		</div>
		)
}

export default SortNav;