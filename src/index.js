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
			mode: "intro",
		}

		this.changeMode = this.changeMode.bind(this);

	}

	changeMode(e){
		this.setState({
			mode: e
		})
		console.log(this.state.mode);
	}

	render() {
		return (
			<div class={this.state.mode == "intro" ? "" : "wrapper"}>
				<NavBar changeMode={this.changeMode} mode={this.state.mode} />
				<Intro buy={buy} mode={this.state.mode} />
				{this.state.mode != "intro" ? <PropertyDisplay mode={this.state.mode} /> : null}
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));