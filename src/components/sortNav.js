import React from 'react';

const SortNav = (props) => {
  return (
    <div className="sortNav" role="filterNeighborhoods">
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
        <option value={props.mode == "buy" ? "250000" : "1500"}>{props.mode == "buy" ? "$250,000" : "$1,500/mo"}</option>
        <option value={props.mode == "buy" ? "350000" : "2000"}>{props.mode == "buy" ? "$350,000" : "$2,000/mo"}</option>
        <option value={props.mode == "buy" ? "500000" : "2500"}>{props.mode == "buy" ? "$500,000" : "$2,500/mo"}</option>
        <option value={props.mode == "buy" ? "600000" : "3000"}>{props.mode == "buy" ? "$600,000" : "$3,000/mo"}</option>
        <option value={props.mode == "buy" ? "750000" : "3500"}>{props.mode == "buy" ? "$750,000" : "$3,500/mo"}</option>
        <option value={props.mode == "buy" ? "850000" : "4000"}>{props.mode == "buy" ? "$850,000" : "$4,000/mo"}</option>
        <option value={props.mode == "buy" ? "1000000" : "5000"}>{props.mode == "buy" ? "$1,000,000" : "$5,000/mo"}</option>
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