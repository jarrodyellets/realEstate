import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';

let la = 0;
let lo = 0;
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const house = <i className="fas fa-home"></i>;
Geocode.setApiKey("AIzaSyDwxBir2yZyRQ2Zn8MCCY1UL7N-YA6mHwE")

Geocode.fromAddress("1303 Hillside Ave Austin TX").then(
	response => {
	  const {lat, lng} = response.results[0].geometry.location;
	  console.log(lat, lng);
	  la = lat;
	  lo = lng;
	  console.log(la, lo);
	},
	error => {
	  console.error(error);
	}
);

class SimpleMap extends Component {
	constructor(props){
		super(props);
		this.state = {
			center: {
				lat: 30.266926,
				lng: -97.750519
			},
			zoom: 11
		};

		this.loadMap = this.loadMap.bind(this);
	}

	loadMap(){
		getCord();
		this.setState({
			center: {
				lat: la,
				lng: lo
			}
		})
	}


  render() {
    return (
      <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC0EL0VwCZ8DWy0_Xb9FG5nrFsUp6iMS7o" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={30.249747}
            lng={-97.745913}
            text={house}
          />
           <AnyReactComponent
            lat={30.275}
            lng={-97.85}
            text={house}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;