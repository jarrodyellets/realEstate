import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const Maps = (props) => {
	const houses = props.neighborhood.map((house, i) => {
		return(
       <Marker key={house.image}
       				 id={i}
       				 lat={house.lat}
       				 lng={house.lng}
       				 price={house.price}
       				 stateId={props.id}
       				 neighborhood={props.neighborhood}
       				 changeId={props.changeId}
       				 hoverId={props.hoverId}
       				 changeHoverId={props.changeHoverId} />
			)
	});

	return (
	  <div style={{ height: '100%', width: '60%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC0EL0VwCZ8DWy0_Xb9FG5nrFsUp6iMS7o" }}
        center={props.center}
        zoom={props.zoom}>
        {houses}
      </GoogleMapReact>
    </div>
		)
}

export default Maps;
