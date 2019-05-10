import React from 'react';
import superagent from 'superagent';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventInfo: [],
    };
  }

  eventResults = async e => {
    let eventData = await superagent(`https://aqueous-springs-46846.herokuapp.com/events`)
    .query({data: this.props.search_query}) 
    this.setState({ eventInfo: eventData.body })
  }

  componentDidUpdate(prevProps) {
    if (this.props.search_query !== prevProps.search_query){
    this.eventResults();
    }
  }

  render() {
    return (
      <div>
      <ul>
      {this.state.eventInfo.length > 0 ? this.state.eventInfo.map(element => {
        return <li>{element.name + ' , ' + element.event_date}</li> 
      }) : ''}
      </ul>
      </div>
    )
  }
}

export default Events;