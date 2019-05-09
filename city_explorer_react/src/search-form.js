import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      word: '',
    };
  }

  handleWord = e => {
    let word = e.target.value;
    this.setState({ word });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let locationData = await superagent(`https://city-explorer-backend.herokuapp.com/location`)
      .query({data: this.state.word})
    this.props.passLocation(locationData.body);
  };

  render() {
    return (
      <form>
        <input onChange={this.handleWord} />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default SearchForm;
