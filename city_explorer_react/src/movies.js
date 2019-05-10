import React from 'react';
import superagent from 'superagent';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: [],
    };
  }

  movieResults = async e => {
  let movieData = await superagent(`https://city-explorer-backend.herokuapp.com/movies`)
    .query({data: this.props.googleDataObject}) 
  this.setState({ movieInfo: movieData.body })
  }

  componentDidUpdate(prevProps) {
    if (this.props.googleDataObject.search_query !== prevProps.googleDataObject.search_query){
    this.movieResults();
    }
  }

  render() {
    return (
      <div>
      <ul>
      {this.state.movieInfo.length > 0 ? this.state.movieInfo.map(element => {
        return <li>{element.title + ' ' + element.overview}</li> 
      }) : ''}
      </ul>
      </div>
    )
  }
}

export default Movies;