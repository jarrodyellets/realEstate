import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/nav';
import Intro from './components/intro';

import style from '../public/css/style.css';

class App extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<NavBar />
				<Intro />
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));