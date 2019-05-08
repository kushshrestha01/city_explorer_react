import React from 'react';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

const Header = () => {
  return (
    <header>
      <h1>City Explorer</h1>
      <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
    </header>
  );
};

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

class Map extends React.Component {
  render() {
    return (
      <div>
        <p>google map here</p>
      </div>
    );
  }
}

class Result extends React.Component {
  render() {
    return (
      <section>
        <p>lorem ipsum</p>
      </section>
    )
  }
}

export default App;