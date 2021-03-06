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
    this.setState({ eventInfo: eventData.body }, () => console.log(this.state.eventInfo[0]))
  }

  componentDidUpdate(prevProps) {
    if (this.props.search_query !== prevProps.search_query){
    this.eventResults();
    }
  }

  render() {
    if(this.props.search_query){
      return (
        <div class = 'Event'>
        <p>Results from the Eventbrite API
        <ul>
        {this.state.eventInfo.length > 0 ? this.state.eventInfo.map(element => {
          return <li>
            <p>{element.name}</p>
            <p>{element.event_date}</p>
            <a href={element.link}><p>{element.link}</p></a>
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

export default Events;
