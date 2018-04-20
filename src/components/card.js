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
			width: '100%',
			height: '100%',
			cursor: 'pointer'
		}
		return(
			<div className="card" style={cardStyle}>
				<div className="description">
					<span className="price">{this.props.price} </span>
					<div>
						<span className="beds">{this.props.beds} </span>
						<span className="baths">{this.props.baths} </span>
						<span className="size">{this.props.size}</span>
					</div>
				</div>
				<div className="address"> {this.props.address} Austin, TX</div>
			</div>
		)
	}
}

export default Card;