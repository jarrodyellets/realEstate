import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/nav';
import Intro from './components/intro';
import SimpleMap from './components/map';
import buy from './data/buy';

import style from '../public/css/style.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			intro: true,
			mode: "intro"
		}
	}

	render() {
		return (
			<div>
				<NavBar />
				<Intro buy={buy} />
				<SimpleMap />
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));