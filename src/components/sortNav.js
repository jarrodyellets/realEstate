import React from 'react';

const SortNav = (props) => {
	return (
		<div className="sortNav">
			<select value={props.value} onChange={props.changeValue} className="sortSelect ">
				<option value="Neighborhood" disabled>Neighborhood</option>
				<option value="Downtown">Downtown</option>
				<option value="Travis Heights">Travis Heights</option>
				<option value="East Austin">East Austin</option>
				<option value="Rollingwood">Rollingwood</option>
				<option value="Barton Hills">Barton Hills</option>
				<option value="Westlake">Westlake</option>
				<option value="Tarrytown">Tarrytown</option>
				<option value="Hyde Park">Hyde Park</option>
				<option value="West Campus">West Campus</option>
				<option value="Neighborhood">All Neigborhoods</option>
			</select>
			<select value={props.price} onChange={props.changeValue} className="sortSelect ">
				<option value="price" disabled>Price</option>
				<option value="low">0 - $300,000</option>
				<option value="mid-low">$300,001 - $500,000</option>
				<option value="mid">$500,001 - $700,000</option>
				<option value="mid-high">$700,001 - $900,000</option>
				<option value="high">> $1,000,000</option>
				<option value="all price">All</option>
			</select>
			<select value={props.beds} onChange={props.changeValue} className="sortSelect ">
				<option value="beds" disabled>Bedrooms</option>
				<option value="1 bd">1</option>
				<option value="2 bds">2</option>
				<option value="3 bds">3</option>
				<option value="4 bds">4</option>
				<option value="5 bds">5+</option>
				<option value="all bds">All</option>
			</select>
			<button className="sortButton">Submit</button>
		</div>
		)
}

export default SortNav;