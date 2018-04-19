import React, {Component} from 'react';
import Maps from './map';
import CardDisplay from './cardDisplay';

class PropertyDisplay extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return(
			<div className="propertyContainer">
				<div className="propertyGrid">
					<Maps zoom={this.props.zoom} 
								center={this.props.center} 
								buy={this.props.buy} 
								neighborhood={this.props.neighborhood} 
								value={this.props.value} 
								id={this.props.id}
								changeId={this.props.changeId}
								hoverId={this.props.hoverId}
								changeHoverId={this.props.changeHoverId} />
					<CardDisplay neighborhood={this.props.neighborhood} 
											 buy={this.props.buy} 
											 value={this.props.value} 
											 id={this.props.id} 
											 changeId={this.props.changeId} />
				</div>
			</div>
			)
	}
}

export default PropertyDisplay;