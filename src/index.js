import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/nav';
import Intro from './components/intro';
import Maps from './components/map';
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
			<div>
				<NavBar changeMode={this.changeMode} />
				<Intro buy={buy} mode={this.state.mode} />
				<Maps mode={this.state.mode} />
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));