import React from 'react';

import Header from './header';
import Map from './map';
import Result from './result';
import SearchForm from './search-form';
// import Data from './search-form';

// import SearchResults from './search-results';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      lat: '',
      lng: '',
      search_query: '',
      formatted_query: '',
    };
  }

  passLocation = (location) => {
    this.setState({
      lat: location.latitude,
      lng: location.longitude,
      search_query: location.search_query,
      formatted_query: location.formatted_query,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchForm passLocation={this.passLocation}/>
        <Map 
          lat = {this.state.lat}
          lng = {this.state.lng}
        />
        {/* <SearchResults /> */}
        <Result 
        lat = {this.state.lat}
        lng = {this.state.lng}
        />
      </React.Fragment>
    );
  }
}

export default App;