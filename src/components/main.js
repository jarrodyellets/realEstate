import React, {Component} from 'react';
import CardDetail from './cardDetail';
import NavBar from './nav';
import Intro from './intro';
import PropertyDisplay from './propertyDisplay';
import SortNav from './sortNav';
import Footer from './footer';
import buy from '../data/buy';
import rent from '../data/rent';
import neighborhoodData from '../data/neighborhoodData';
import { changeInt } from '../actions/introAction';
import { changeVal } from '../actions/valueAction';
import { changeMo } from '../actions/modeAction';
import { changeBed } from '../actions/bedsAction';
import { connect } from 'react-redux';


class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      ascending: true,
      neighborhood: buy,
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

// Changes between splash page and main page
  changeIntro(){
    const intro = this.props.intro
    this.props.changeInt(!intro);
  }

// Changes between buy and rent modes
  changeMode(e){
    this.props.changeMo(e)
    .then(() => {
      this.changeNeighborhood();
    })
  }

// Set selected neighborhood
  changeValue(e) {
    const value = e.target.value;
    this.props.changeVal(value)
    .then(() => {
      this.changeNeighborhood();
    })
  }

// Change number of bedrooms
  changeBeds(e){
    const beds = e.target.value;
    this.props.changeBed(beds)
    .then(() => {
      this.changeNeighborhood();
    })
  }

// Set filtered neighborhood (beds, price, etc)
  changeNeighborhood(){
    const neighborhood = this.props.value;
    const beds = this.props.beds;
    const price = this.state.price;
    const list = this.props.mode == "buy" ? buy : rent;
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
      center: neighborhoodData[this.props.value.replace(/\s/g, '')],
      zoom: neighborhood == "Austin" ? 13 : 14
    })
  }

// Change max price
  changePrice(e){
    this.setState({
      price: e.target.value
    }, ()=> {
      this.changeNeighborhood();
    })
  }

// Current house in neighborhoom array
  changeId(e){
    this.setState({
      id: e
    })
  }

// Changes current house hover on map
  changeHoverId(e){
    this.setState({
      hoverId: e
    })
  }

// Changes type of sort
  changeSort(){
    const sort = this.state.ascending;
    this.setState({
      ascending: !sort
    }, () => {
      this.changeNeighborhood();
    })
  }

// Expands details about house
  changeDetail(){
    const detail = this.state.detail
    this.setState({
      detail: !detail
    })
  }

// Changes to selected house
  changeHouse(e){
    const neighborhood = this.state.neighborhood;
    this.setState({
      house: neighborhood[e]
    })
  }

  render() {
    return (
      <div className={this.props.intro ? "" : "wrapper"} role="main" style={this.state.detail && !this.props.intro ? {height: '100%',
                                                                                                                      overflow: 'hidden',
                                                                                                                      width: '100%',
                                                                                                                      position: 'fixed'} : null}>
        {this.state.detail ? <CardDetail house={this.state.house} 
                                        detail={this.state.detail} 
                                        changeDetail={this.changeDetail} 
                                        mode={this.props.mode} /> : null}
        <NavBar changeIntro={this.changeIntro}
                intro={this.props.intro}
                mode={this.props.mode}
                changeMode={this.changeMode} />
        {!this.props.intro ?<SortNav value={this.props.value}
                                    changeValue={this.changeValue}
                                    beds={this.props.beds} 
                                    price={this.state.price}
                                    changeBeds={this.changeBeds}
                                    changePrice={this.changePrice}
                                    mode={this.props.mode} />: null}
        <Intro buy={buy}
              rent={rent}
              intro={this.props.intro}
              changeIntro={this.changeIntro}
              value={this.props.value}
              changeValue={this.changeValue}
              mode={this.props.mode}
              changeMode={this.changeMode}
              detail={this.state.detail}
              changeDetail={this.changeDetail} 
              changeHouse={this.changeHouse} />
        {!this.props.intro ? <PropertyDisplay id={this.state.id}
                                              changeId={this.changeId}
                                              mode={this.props.mode}
                                              zoom={this.state.zoom}
                                              center={this.state.center}
                                              value={this.props.value}
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
      {this.props.intro ? <Footer /> : null}
      </div>
      )
  }
}

const mapStateToProps = state => ({
  intro: state.intro.intro,
  value: state.value.value,
  mode: state.mode.mode,
  beds: state.beds.beds
})

export default connect(mapStateToProps, {changeInt, changeVal, changeMo, changeBed})(Main);