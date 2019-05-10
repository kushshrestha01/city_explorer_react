import React from 'react';
import superagent from 'superagent';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: [],
    };
  }

  weatherResults = async e => {
  let weatherData = await superagent(`https://city-explorer-backend.herokuapp.com/weather`)
    .query({data: this.props.googleDataObject}) 
  this.setState({ weatherInfo: weatherData.body })
  }

  componentDidUpdate(prevProps) {
    if (this.props.googleDataObject.search_query !== prevProps.googleDataObject.search_query){
    this.weatherResults();
    }
  }

  render() {
    if(this.props.googleDataObject.search_query){
      return (
        <div class = 'weather'>
        <p>Results from the Dark Sky API
        <ul>
        {this.state.weatherInfo.length > 0 ? this.state.weatherInfo.map(element => {
          return <li>
            <p>{element.time}</p>
            <p>{element.forecast}</p>
          </li> 
        }) : 'Nothing to Show'}
        </ul>
        </p>
        </div>
      )
    }
    else {
      return (
        <p></p>
      )
    }
  }
}

export default Weather;
