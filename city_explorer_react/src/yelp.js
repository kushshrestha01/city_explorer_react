import React from 'react';
import superagent from 'superagent';

class Yelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yelpInfo: [],
    };
  }

  yelpResults = async e => {
    console.log(this.props.googleDataObject);
  let yelpData = await superagent(`https://city-explorer-backend.herokuapp.com/yelp`)
    .query({data: this.props.googleDataObject}) 
  this.setState({ yelpInfo: yelpData.body }, () => console.log(this.state.yelpInfo[0]))
  }

  componentDidUpdate(prevProps) {
    if (this.props.googleDataObject.search_query !== prevProps.googleDataObject.search_query){
    this.yelpResults();
    }
  }

  render() {
    return (
      <div>
      <ul>
      {this.state.yelpInfo.length > 0 ? this.state.yelpInfo.map(element => {
        return <li>{element.name + ' : ' + element.price}</li> 
      }) : ''}
      </ul>
      </div>
    )
  }
}

export default Yelp;