import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/nav';
import Intro from './components/intro';
import PropertyDisplay from './components/PropertyDisplay';
import buy from './data/buy';

import style from '../public/css/style.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			intro: true,
			mode: "buy",
			value: "Neighborhood",
			zoom: 13,
			center: {
				lat: 30.266926,
				lng: -97.750519
			}
		}

		this.changeIntro = this.changeIntro.bind(this);
		this.changeValue = this.changeValue.bind(this);
		this.changeMode = this.changeMode.bind(this);

	}

	changeIntro(){
		const intro = this.state.intro
		this.setState({
			intro: !intro
		})
		console.log(this.state.mode);
	}

	changeMode(e){
		this.setState({
			mode: e
		})
	}

	changeValue(e) {
		this.setState({
			value: e.target.value
		})
	}

	render() {
		return (
			<div className={this.state.intro ? "" : "wrapper"}>
				<NavBar changeIntro={this.changeIntro} intro={this.state.intro} mode={this.state.mode} changeMode={this.changeMode} />
				<Intro buy={buy} intro={this.state.intro} value={this.state.value} changeValue={this.changeValue} mode={this.state.mode} changeMode={this.changeMode} />
				{!this.state.intro ? <PropertyDisplay mode={this.state.intro} zoom={this.state.zoom} center={this.state.center} /> : null}
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));