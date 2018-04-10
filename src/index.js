import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/nav';

import style from '../public/css/style.css';

class App extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<NavBar />
				<div className="main">

				</div>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));