import React, {Component} from 'react';
import Maps from './map';
import CardDisplay from './cardDisplay';

class PropertyDisplay extends Component{
	constructor(props){
		super(props);

	}

	render(){
		console.log(this.props.mode);
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
											 ascending={this.props.ascending}
											 changeSort={this.props.changeSort} 
											 id={this.props.id} 
											 changeId={this.props.changeId}
											 mode={this.props.mode} />
				</div>
			</div>
			)
	}
}

export default PropertyDisplay;