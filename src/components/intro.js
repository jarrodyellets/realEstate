import React, {Component} from 'react';
import Neighborhood from './neighborhood';
import Featured from './featured';


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
			<div className={this.props.intro ? "" : "hidden"}>
				<div className="preload"></div>
				<div className={this.state.day ? 'main austinDay' : 'main austinNight'}>
					<div className="titleContainer">
						<div className="introTitle">Find your {this.state.day ? 'next house' : 'new rental'}</div>
						<div className="buttonIntroDiv">
							<button className={this.state.day ? 'introButton activeButton' : 'introButton unActiveButton'} onClick={this.handleBuyClick}>Buy</button>
							<button className={this.state.day ? 'introButton unActiveButton' : 'introButton activeButton'} onClick={this.handleRentClick}>Rent</button>
						</div>
						<Neighborhood value={this.props.value} changeValue={this.props.changeValue} changeIntro={this.props.changeIntro} />
					</div>
				</div>
				<Featured buy={this.props.buy} />
			</div>
			)
	}
}

export default Intro;
