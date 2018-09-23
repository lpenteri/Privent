import React, { Component } from 'react'
import '../css/eventGuiCss.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

library.add(faUsers)

class EventUi extends Component {
  state = {
    days:0,
    hours:0,
    minutes:0,
    seconds:0
  }


  updateCountdown(){
    var eventDate = new Date("2018-09-25T15:35:58.000Z");
    var eventSeconds = eventDate.getTime() / 1000;

    var currentDate = new Date();
    var currentSeconds = currentDate.getTime() / 1000;

    var secondsDiff = eventSeconds - currentSeconds;

    var days = Math.floor(secondsDiff/86400);
    var remaining = secondsDiff%86400;

    var hours = Math.floor(remaining/3600);
    remaining = remaining%3600;

    var minutes = Math.floor(remaining/60);
    remaining = remaining%60;

    var seconds = Math.floor(remaining);

    this.setState({
      days:days,
      hours:hours,
      minutes:minutes,
      seconds:seconds
    })
  }

  componentDidMount() {
  this.timerID = setInterval(
    () => this.updateCountdown(),
    1000
  );
}

componentWillUnmount() {
  clearInterval(this.timerID);
}

  render () {
    return (
      <div className='container'>
        <div className='col-md-12'>
          <h2 className="title position-relative" ><b>EVENT INFORMATION</b></h2>
          <div className='event-info'>
            <p className='info-venue'>
              <span className='info-venue-icon'></span>
              <span id='date'> Saturday, October 13 2018, 9:45 AM - 3:00 PM [EST] </span>
              <br/>
              <span className= 'location-venue-icon'></span>
              <span id='location'> Ydras 4 Thessaloniki-Greece</span>

            <h2 className="title" ><b>DESCRIPTION</b></h2>
              <span id='description'> This event description bla bla bla bla bla .... </span>
            <h2 className="title" ><b>ABOUT THE ORGANIZER</b></h2>
              <span id='organizerInfo'>Nikos Chatzivasileiadis is the best blockchain developer in the world ... </span>
            <h2 className="title" ><b>ATTENDERS</b></h2>
              <span className='info-users-icon'></span>
              <span id='attenders'>15 people will <b>attend</b> this event</span>
              <br/>
              <span> 3 of them are in your <b>connections</b></span>
              <FontAwesomeIcon className='super-crazy-colors' />
            </p>
            <h1 className="title" ><b>COUNTDOWN TO EVENT</b></h1>
            <div className='wrapper'>
              <div className='countdown'>
                <div className = 'digit'>
                  <div id='days' className='digit-number'>{this.state.days}</div>
                  <div id='daysDescr' className='digit-label'>Days</div>
                </div>
                <div className = 'digit'>
                  <div id='hours' className='digit-number'>{this.state.hours}</div>
                  <div id='hoursDescr' className='digit-label'>Hours</div>
                </div>
                <div className = 'digit'>
                  <div id='minutes' className='digit-number'>{this.state.minutes}</div>
                  <div id='minutesDescr' className='digit-label'>Minutes</div>
                </div>
                <div className = 'digit'>
                  <div id='seconds' className='digit-number'>{this.state.seconds}</div>
                  <div id='secondsDescr' className='digit-label'>Seconds</div>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default EventUi
