import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>City Explorer</h1>
      <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
    </header>
  );
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  handleWord = e => {
    let number = e.target.value;
    this.setState({ number });
  };

  handleClickPositive = e => {
    e.preventDefault();
    let number = this.state.number
      number++
    this.setState({ number });
  };

  handleClickNegative = e => {
    e.preventDefault();
    let number = this.state.number
      number--
    this.setState({ number });
  };

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handleClickPositive}>+</button>
        <button onClick={this.handleClickNegative}>-</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;