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
					<Maps zoom={this.props.zoom} center={this.props.center} buy={this.props.buy} neighborhood={this.props.neighborhood} />
				</div>
			</div>
			)
	}
}

export default PropertyDisplay;