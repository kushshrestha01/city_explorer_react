import React from 'react';

import Header from './header';
import Map from './map';
import SearchForm from './search-form';
import Weather from './weather';
import Movies from './movies';
import Events from './events'
import Yelp from './yelp'

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

        <div class = 'body'>
        
        <Weather googleDataObject = {this.state.location} />

        <Events search_query = {this.state.location.search_query}/>

        <Movies googleDataObject = {this.state.location}/>

        <Yelp googleDataObject = {this.state.location}/>

        </div>

      </React.Fragment>
    );
  }
}

export default App;