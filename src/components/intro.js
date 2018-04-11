import React, {Component} from 'react';

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
					<div className="introTitle">Find your new {this.state.day ? 'house' : 'rental'}</div>
					<div className="buttonIntroDiv">
						<button className="introButton" onClick={this.handleBuyClick}>Buy</button>
						<button className="introButton" onClick={this.handleRentClick}>Rent</button>
					</div>
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
				</div>
			</div>
			)
	}
}

export default Intro;