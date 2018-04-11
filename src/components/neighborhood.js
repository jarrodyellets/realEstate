import React from 'react';

const Neighborhood = (props) => {
	return (
		<div className="selectDiv">
			<select className="introSelect">
				<option value="" disabled selected>Choose Neighborhood</option>
				<option value="downtown">Downtown</option>
				<option value="travis-heights">Travis Heights</option>
				<option value="east-austin">East Austin</option>
				<option value="rollingwood">Rollingwood</option>
				<option value="barton-hills">Barton Hills</option>
				<option value="westlake">Westlake</option>
				<option value="tarrytown">Tarrytown</option>
				<option value="hyde-park">Hyde Park</option>
				<option value="east-riverside">East Riverside</option>
				<option value="allandale">Allandale</option>
			</select>
			<button className="selectButton">Submit</button>
		</div>
		)
}

export default Neighborhood;