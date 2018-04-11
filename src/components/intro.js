import React, {Component} from 'react';

class Intro extends Component {
	constructor(props){
		super(props);
		this.state = {
			day: true
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		let day = this.state.day;
		this.setState({
			day: !day
		})
	}

	render(){
		return (
			<div className={this.state.day ? 'main austinDay' : 'main austinNight'}>
				<div className="introTitle">Find you new {this.state.day ? 'home' : 'rental'}</div>
				<button onClick={this.handleClick}>Click Me</button>
			</div>
			)
	}
}

export default Intro;