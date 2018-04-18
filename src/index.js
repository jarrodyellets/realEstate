import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/nav';
import Intro from './components/intro';
import PropertyDisplay from './components/PropertyDisplay';
import SortNav from './components/sortNav';
import buy from './data/buy';

import style from '../public/css/style.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			intro: true,
			mode: "buy",
			value: "Neighborhood",
			neighborhood: buy,
			beds: "beds",
			price: "price",
			zoom: 13,
			center: {
				lat: 30.266926,
				lng: -97.750519
			}
		}

		this.changeIntro = this.changeIntro.bind(this);
		this.changeValue = this.changeValue.bind(this);
		this.changeMode = this.changeMode.bind(this);
		this.changeBeds = this.changeBeds.bind(this);
		this.changePrice = this.changePrice.bind(this);

	}

	changeIntro(){
		const intro = this.state.intro
		this.setState({
			intro: !intro
		})
	}

	changeMode(e){
		this.setState({
			mode: e
		})
	}

	changeValue(e) {
		this.setState({
			value: e.target.value
		}, () => {
			this.changeNeighborhood();
		})
		
	}

	changeBeds(e){
		this.setState({
			beds: e.target.value
		}, () => {
			this.changeNeighborhood();
		})
		
	}

	changeNeighborhood(){
		const neighborhood = this.state.value;
		const beds = this.state.beds
		const filteredNeighborhood = buy.filter(function(house){
		 return neighborhood != "Neighborhood" ? house.neighborhood == neighborhood : buy
		})
		const newfilteredNeighborhood = filteredNeighborhood.filter(function(house){
			return beds != "beds" ? house.bedrooms == beds : filteredNeighborhood
		})
		this.setState({
			neighborhood: newfilteredNeighborhood
		})	
	}

	changePrice(e){
		this.setState({
			price: Number((e.target.value).replace(/[^\d.]/g, ''))
		})
	}

	render() {
		console.log(this.state.neighborhood);
		return (
			<div className={this.state.intro ? "" : "wrapper"}>
				<NavBar changeIntro={this.changeIntro} intro={this.state.intro} mode={this.state.mode} changeMode={this.changeMode} />
				{!this.state.intro ?<SortNav value={this.state.value} changeValue={this.changeValue} beds={this.state.beds} price={this.state.price} changeBeds={this.changeBeds} />: null}
				<Intro buy={buy} intro={this.state.intro} changeIntro={this.changeIntro} value={this.state.value} changeValue={this.changeValue} mode={this.state.mode} changeMode={this.changeMode} />
				{!this.state.intro ? <PropertyDisplay mode={this.state.intro} zoom={this.state.zoom} center={this.state.center} value={this.state.value} buy={buy} neighborhood={this.state.neighborhood} /> : null}
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));