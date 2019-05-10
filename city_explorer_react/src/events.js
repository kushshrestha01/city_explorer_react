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
    return (
      <div class = 'event'>
      <ul>
      {this.state.eventInfo.length > 0 ? this.state.eventInfo.map(element => {
        return <li>
          <p>{element.name}</p>
          <p>{element.event_date}</p>
          <a href={element.link}><p>{element.link}</p></a>
        </li> 
      }) : ''}
      </ul>
      </div>
    )
  }
}

export default Events;


        /* <li key={idx}>
        <p>{ele.title}</p>
        <p>{ele.released_on}</p>
        <p>{ele.total_votes}</p>
        <p>{ele.average_votes}</p>
        <p>{ele.popularity}</p>
        <img src={ele.image_url} alt='IMG'></img>
        <p>{ele.overview}</p>
        </li> */
      // <a href={ele.url}><p>{ele.name}</p></a>
      // <img src ={ele.image_url}></img>