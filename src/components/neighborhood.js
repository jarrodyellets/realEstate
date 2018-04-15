import React from 'react';

const Neighborhood = (props) => {
	return (
		<div className="selectDiv">
			<select value={props.value} onChange={props.changeValue} className="introSelect">
				<option value="Neighborhood" disabled>Choose Neighborhood</option>
				<option value="Downtown">Downtown</option>
				<option value="Travis Heights">Travis Heights</option>
				<option value="East Austin">East Austin</option>
				<option value="Rollingwood">Rollingwood</option>
				<option value="Barton Hills">Barton Hills</option>
				<option value="Westlake">Westlake</option>
				<option value="Tarrytown">Tarrytown</option>
				<option value="Hyde Ppark">Hyde Park</option>
			</select>
			<button className="selectButton">Submit</button>
		</div>
		)
}

export default Neighborhood;
