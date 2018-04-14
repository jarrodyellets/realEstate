import React, {Component} from 'react';
import Maps from './map';

class PropertyDisplay extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return(
			<div className="propertyContainer">
				<div className="propertyGrid">
					<Maps />
				</div>
			</div>
			)
	}
}

export default PropertyDisplay;