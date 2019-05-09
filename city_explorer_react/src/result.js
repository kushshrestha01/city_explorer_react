import React from 'react';

class Result extends React.Component {
  render() {
    return (
      <section>
        <p>await superagent.get{`https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_API_KEY}/${this.props.lat},${this.props.lng}`}</p>
      </section>
    )
  }
}

export default Result;