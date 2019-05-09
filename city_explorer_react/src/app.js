import React from 'react';

import Header from './header';
import Map from './map';
import Result from './result';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchForm />
        <Map />
        <SearchResults />
        <Main />
      </React.Fragment>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: 'search',
    };
  }

  handleWord = e => {
    let word = e.target.value;
    this.setState({ word });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <Search />
        <Map />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </React.Fragment>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        <input onChange={this.handleWord} />
        <button onClick={this.handleSubmit}>Submit</button>
      </React.Fragment>
    );
  }
}

export default App;