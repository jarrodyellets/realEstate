import React, {Component} from 'react';

class Card extends Component {
	constructor(props){
		super(props);

	}

	render(){
		let cardStyle = {
			backgroundImage: 'url(' + this.props.img + ')',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			width: '400px',
			height: '200px'
		}
		return(
			<div className="card" style={cardStyle}>
				<div className="description">
					<div className="price">{this.props.price}</div>
					<div className="beds">{this.props.beds}</div>
					<div className="baths">{this.props.baths}</div>
					<div className="size">{this.props.size}</div>
				</div>
				<div className="address"> {this.props.address}</div>
			</div>
		)
	}
}

export default Card;