import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';
import Marker from './marker';

let la = 0;
let lo = 0;
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

class Maps extends Component {
	constructor(props){
		super(props);

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
	      <div style={{ height: '100%', width: '60%' }}>
	        <GoogleMapReact
	          bootstrapURLKeys={{ key: "AIzaSyC0EL0VwCZ8DWy0_Xb9FG5nrFsUp6iMS7o" }}
	          defaultCenter={this.props.center}
	          defaultZoom={this.props.zoom}
	        >
	          <Marker
	            lat={30.249747}
	            lng={-97.745913}
	            price="$625k"
	          />
	        </GoogleMapReact>
	      </div>
    );
  }
}

export default Maps;