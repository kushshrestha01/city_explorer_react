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
  this.setState({ movieInfo: movieData.body }, () => console.log(this.state.movieInfo[0]))
  }

  componentDidUpdate(prevProps) {
    if (this.props.googleDataObject.search_query !== prevProps.googleDataObject.search_query){
    this.movieResults();
    }
  }

  render() {
    return (
      <div class = 'movies'>
      <p> Results from The Movie DB API
      <ul>
      {this.state.movieInfo.length > 0 ? this.state.movieInfo.map(element => {
        return <li>
            <p>{element.title}</p>
            <p>{element.overview}</p>
          </li>
      }) : 'Nothing to Show'}
      </ul>
      </p>
      </div>
    )
  }
}

export default Movies;