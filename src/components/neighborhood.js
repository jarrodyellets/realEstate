import React from 'react';

const Neighborhood = (props) => {
  return (
    <div className="selectDiv" role="selectNeighborhood">
      <select value={props.value} onChange={props.changeValue} className="introSelect introButton">
        <option value="Austin" disabled>Neighborhood</option>
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
      <button className="selectButton introButton" onClick={props.changeIntro} >Submit</button>
    </div>
    )
}

export default Neighborhood;
