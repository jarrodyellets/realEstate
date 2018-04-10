import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav';

import style from '../public/css/style.css';

class App extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<Nav />
				<div className="main">

				</div>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));