import React, {Component} from 'react';
import Neighborhood from './neighborhood';

class Intro extends Component {
	constructor(props){
		super(props);
		this.state = {
			day: true
		}

		this.handleBuyClick = this.handleBuyClick.bind(this);
		this.handleRentClick = this.handleRentClick.bind(this);
	}

	handleBuyClick(){
		this.setState({
			day: true
		})
	}

	handleRentClick(){
		this.setState({
			day: false
		})
	}

	render(){
		return (
			<div className={this.state.day ? 'main austinDay' : 'main austinNight'}>
				<div className="titleContainer">
					<div className="introTitle">Find your {this.state.day ? 'next house' : 'new rental'}</div>
					<div className="buttonIntroDiv">
						<button className={this.state.day ? 'introButton activeButton' : 'introButton'} onClick={this.handleBuyClick}>Buy</button>
						<button className={this.state.day ? 'introButton' : 'introButton activeButton'} onClick={this.handleRentClick}>Rent</button>
					</div>
					<Neighborhood />
				</div>
			</div>
			)
	}
}

export default Intro;