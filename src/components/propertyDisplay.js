import React, {Component} from 'react';
import Maps from './map';
import CardDisplay from './cardDisplay';

const PropertyDisplay = (props) => {
    return(
      <div className="propertyContainer">
        <div className="propertyGrid">
          <Maps zoom={props.zoom} 
                center={props.center} 
                buy={props.buy} 
                neighborhood={props.neighborhood} 
                value={props.value} 
                id={props.id}
                changeId={props.changeId}
                hoverId={props.hoverId}
                changeHoverId={props.changeHoverId}
                house={props.house}
                detail={props.detail}
                changeDetail={props.changeDetail}
                changeHouse={props.changeHouse} />
          <CardDisplay neighborhood={props.neighborhood} 
                       buy={props.buy} 
                       value={props.value}
                       ascending={props.ascending}
                       changeSort={props.changeSort} 
                       id={props.id} 
                       changeId={props.changeId}
                       mode={props.mode}
                       house={props.house}
                       detail={props.detail}
                       changeDetail={props.changeDetail}
                       changeHouse={props.changeHouse} />
        </div>
      </div>
      )
}

export default PropertyDisplay;