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
				<option value="Hyde Ppark">Hyde Park</option>
			</select>
			<select value={props.value} onChange={props.changeValue} className="sortSelect ">
				<option value="Neighborhood" disabled>Price</option>
				<option value="Downtown">0 - $300,000</option>
				<option value="Travis Heights">$300,001 - $500,000</option>
				<option value="East Austin">$500,001 - $700,000</option>
				<option value="Rollingwood">$700,001 - $900,000</option>
				<option value="Barton Hills">> $1,000,000</option>
				<option value="Westlake">All</option>
			</select>
			<select value={props.value} onChange={props.changeValue} className="sortSelect ">
				<option value="Neighborhood" disabled>Bedrooms</option>
				<option value="Downtown">1</option>
				<option value="Travis Heights">2</option>
				<option value="East Austin">3</option>
				<option value="Rollingwood">4</option>
				<option value="Barton Hills">5+</option>
				<option value="Westlake">All</option>
			</select>
			<button className="sortButton">Submit</button>
		</div>
		)
}

export default SortNav;