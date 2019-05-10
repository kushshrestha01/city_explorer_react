import React from 'react';

import Header from './header';
import Map from './map';
import SearchForm from './search-form';
import Weather from './weather';
import Movies from './movies';
// import Data from './search-form';

// import SearchResults from './search-results';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      location : {
        latitude: '',
        longitude: '',
        search_query: '',
        formatted_query: '',
      }
    };
  }

  passLocation = (location) => {
    this.setState({ location });
  }


  render() {
    return (
      <React.Fragment>
        <Header />
        
        <SearchForm passLocation={this.passLocation}/>
        
        <Map 
          lat = {this.state.location.latitude}
          lng = {this.state.location.longitude}
        />
        
        <Weather googleDataObject = {this.state.location}/>

        <Movies googleDataObject = {this.state.location}/>

        {/* <SearchResults googleDataObject = {this.state.location}/> */}
        
        {/* <Result googleDataObject = {this.state.location}/> */}

      </React.Fragment>
    );
  }
}

export default App;