import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GoogleCalendar extends Component {
  state = {
    events: []
  }

  componentDidMount = () => {
    this.getEvents()
  }

  getEvents(){
    let that = this;
    const CALENDAR_ID = "h2r5dhjmub0un06j2es2fkhsd8@group.calendar.google.com"
    function start() {
      window.gapi.client.init({
        'apiKey': 'AIzaSyDSGXlA4z1ORlrwg5RwyQSCPHNzn68j30k'
      }).then(function() {
        return window.gapi.client.request({
          'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
        })
      }).then( (response) => {
        // let events = response.result.items
        that.setState({
          events: response.result.items
        }, ()=>{
          console.log(that.state.events)
        })
      }, function(reason) {
        console.log(reason)
      })
    }
    window.gapi.load('client', start)
  }

  render() {
    const events = this.state.events
    return (
      <div>
      <h2>Coming Events</h2>
      <a href="https://calendar.google.com/calendar/embed?src=h2r5dhjmub0un06j2es2fkhsd8%40group.calendar.google.com&ctz=America%2FChicago">See Google Calender</a>
      <hr/>
        {events.map((event) => {
        return(
          <div>
            <h3><strong>{event.title}</strong></h3>
            <h4>Location: <em>{event.location}</em></h4>
            <h4>{event.summary}</h4>
            <p>{event.description}</p>
            <h4>{event.start.dateTime} - {event.end.dateTime}</h4>
          <hr/>
          </div>
          )}
        )}
      </div>
    )
  }
}

export default GoogleCalendar