import React from 'react';

class Map extends React.Component {
  render() {
    if(this.props.lat){
      return (
        <div class = 'map'>
          <img src = {`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.lat}%2c%20${this.props.lng}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`} alt = 'location'/>
        </div>
      );
    }
    else {
      return (
        <div class = 'map'>
          <p>Welcome to City Explorer</p>
        </div>
      )
    };
  }
}

export default Map;