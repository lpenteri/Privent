import React, { Component } from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import PickTime from './pickTime';
import '../css/pickDate.css';

import { formatDate, parseDate } from 'react-day-picker/moment';



// In order to make DatePicker input required i have to change the source code due to the lack of props .
// react-day-picker/src/lib/DayPickerInput.js --- line 591 add a required:true
// also add readOnly:'readonly'



export default class PickDate extends Component {
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  focusTo() {
    // Focus to 'To' field. A timeout is required here because the overlays
    // already set timeouts to work properly with input fields
    this.timeout = setTimeout(() => this.to.getInput().focus(), 0);
  }

  showFromMonth() {
    const from = this.props.from;
    const to = this.props.to;

    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }

  handleFromChange(from) {
    // change the from date and focks to the "to" input field
    this.props.fromChange(from);
      if (!this.props.PickDateto)
        this.focusTo();
  }

  handleToChange(to) {
     this.props.toChange(to);
     this.showFromMonth();
  }



  render() {
    const from = this.props.from;
    const to = this.props.to;
    const modifiers = { start: from, end: to };
    return (
      <div className="InputFromTo" >


        {/* eslint-disable-next-line */}
        <label className="DateLabel"> Date </label>
        <br />
        <div className="fieldBlock">
        <DayPickerInput
          inputProps={{ style: { width: '105%' }}}
          value={from}
          placeholder="from"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers,
            numberOfMonths: 2,
          }}
          onDayChange={this.handleFromChange}

        />
        {' '}
        </div>
        <div className="fieldBlock">
          <PickTime timeChange = {this.props.timeFromChange} defaultValue = {moment().startOf('day')}/>
        </div>

        <br/>
        <span className="InputFromTo-to" >
          <div className="fieldBlock">
            <DayPickerInput
              inputProps={{ style: { width: '105%' } }}
              ref={el => (this.to = el)}
              value={to}
              placeholder="to"
              format="LL"
              formatDate={formatDate}
              parseDate={parseDate}
              dayPickerProps={{
                selectedDays: [from, { from, to }],
                disabledDays: { before: from },
                modifiers,
                month: from,
                fromMonth: from,
                numberOfMonths: 2,
              }}
              onDayChange={this.handleToChange}
            />
          </div>
        </span>
        <div className="fieldBlock">
        <PickTime timeChange = {this.props.timeToChange} defaultValue = {moment().endOf('day')}/>
        </div>
      </div>

    );
  }
}
