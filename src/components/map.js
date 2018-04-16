import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const Maps = (props) => {
	const currentNeighborhood = props.buy;
	const houses = currentNeighborhood.map((house, i) => {
		return(
        <Marker key={i} lat={house.lat} lng={house.lng} price={house.price} />
			)
	});

	return (
	  <div style={{ height: '100%', width: '60%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC0EL0VwCZ8DWy0_Xb9FG5nrFsUp6iMS7o" }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        {houses}
      </GoogleMapReact>
    </div>
		)
}

export default Maps;