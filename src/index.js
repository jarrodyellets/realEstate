import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CardDetail from './components/cardDetail';
import NavBar from './components/nav';
import Intro from './components/intro';
import PropertyDisplay from './components/PropertyDisplay';
import SortNav from './components/sortNav';
import buy from './data/buy';
import rent from './data/rent';
import neighborhoodData from './data/neighborhoodData';

import style from '../public/css/style.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			intro: true,
			mode: "buy",
			ascending: true,
			value: "Austin",
			neighborhood: buy,
			beds: "beds",
			price: "price",
			id: null,
			hoverId: null,
			house: null,
			detail: false,
			zoom: 13,
			center: {
				lat: 30.274726,
				lng: -97.750519
			}
		}

		this.changeIntro = this.changeIntro.bind(this);
		this.changeValue = this.changeValue.bind(this);
		this.changeMode = this.changeMode.bind(this);
		this.changeBeds = this.changeBeds.bind(this);
		this.changePrice = this.changePrice.bind(this);
		this.changeId = this.changeId.bind(this);
		this.changeHoverId = this.changeHoverId.bind(this);
		this.changeSort = this.changeSort.bind(this);
		this.changeDetail = this.changeDetail.bind(this);
		this.changeHouse = this.changeHouse.bind(this);

	}

	changeIntro(){
		const intro = this.state.intro
		this.setState({
			intro: !intro,
		}, () => {
			this.changeNeighborhood();
			this.state.intro ? this.changeMode("") : null;
		})
	}

	changeMode(e){
		this.setState({
			mode: e
		}, () => {
			this.changeNeighborhood();
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
		const beds = this.state.beds;
		const price = this.state.price;
		const list = this.state.mode == "buy" ? buy : rent;
		const filteredNeighborhood = list.filter(function(house){
		 return neighborhood != "Austin" ? house.neighborhood == neighborhood : buy
		})
		const newfilteredNeighborhood = filteredNeighborhood.filter(function(house){
			return beds != "beds" ? (Number(beds[0]) < 5 ? house.bedrooms == beds : Number(house.bedrooms[0]) >= 5) : filteredNeighborhood
		})
		const displayedNeighborhood = newfilteredNeighborhood.filter(function(house){
			return price != "price" ? Number((house.price).replace(/[^\d.]/g, '')) <= Number((price).replace(/[^\d.]/g, '')) : filteredNeighborhood
		})
		const sortedNeighborhood = this.state.ascending ? 
															 displayedNeighborhood.sort(function(a,b) {return (Number((a.price).replace(/[^\d.]/g, '')) > Number((b.price).replace(/[^\d.]/g, ''))) ? 1 : ((Number((b.price).replace(/[^\d.]/g, '')) > Number((a.price).replace(/[^\d.]/g, ''))) ? -1 : 0);} ) :
															 displayedNeighborhood.sort(function(a,b) {return (Number((a.price).replace(/[^\d.]/g, '')) < Number((b.price).replace(/[^\d.]/g, ''))) ? 1 : ((Number((b.price).replace(/[^\d.]/g, '')) < Number((a.price).replace(/[^\d.]/g, ''))) ? -1 : 0);} )
		this.setState({
			neighborhood: sortedNeighborhood,
			center: neighborhoodData[this.state.value.replace(/\s/g, '')],
			zoom: neighborhood == "Austin" ? 13 : 14
		})
	}

	changePrice(e){
		this.setState({
			price: e.target.value
		}, ()=> {
			this.changeNeighborhood();
		})
	}

	changeId(e){
		this.setState({
			id: e
		})
	}

	changeHoverId(e){
		this.setState({
			hoverId: e
		})
	}

	changeSort(){
		const sort = this.state.ascending;
		this.setState({
			ascending: !sort
		}, () => {
			this.changeNeighborhood();
		})
	}

	changeDetail(){
		const detail = this.state.detail
		this.setState({
			detail: !detail
		})
	}

	changeHouse(e){
		const neighborhood = this.state.neighborhood;
		this.setState({
			house: neighborhood[e]
		})
	}

	render() {
		return (
			<div className={this.state.intro ? "" : "wrapper"}>
				{this.state.detail ? <CardDetail house={this.state.house} detail={this.state.detail} changeDetail={this.changeDetail} mode={this.state.mode} /> : null}
				<NavBar changeIntro={this.changeIntro}
								intro={this.state.intro}
								mode={this.state.mode}
								changeMode={this.changeMode} />
				{!this.state.intro ?<SortNav value={this.state.value}
																		 changeValue={this.changeValue}
																		 beds={this.state.beds} price={this.state.price}
																		 changeBeds={this.changeBeds}
																		 changePrice={this.changePrice}
																		 mode={this.state.mode} />: null}
				<Intro buy={buy}
							 intro={this.state.intro}
							 changeIntro={this.changeIntro}
							 value={this.state.value}
							 changeValue={this.changeValue}
							 mode={this.state.mode}
							 changeMode={this.changeMode} />
				{!this.state.intro ? <PropertyDisplay id={this.state.id}
																							changeId={this.changeId}
																							mode={this.state.mode}
																							zoom={this.state.zoom}
																							center={this.state.center}
																							value={this.state.value}
																							buy={buy}
																							neighborhood={this.state.neighborhood}
																							ascending={this.state.ascending}
																							changeSort={this.changeSort}
																							hoverId={this.state.hoverId}
																							changeHoverId={this.changeHoverId}
																							house={this.state.house}
																							detail={this.state.detail}
																							changeDetail={this.changeDetail}
																							changeHouse={this.changeHouse} /> : null}
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
