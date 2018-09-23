import React, { Component } from 'react';
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';



class PickTime extends Component {

	constructor(props) {
	    super(props);
	    this.onChange = this.onChange.bind(this);
	}


	onChange(value) {
	  const showSecond = false;
	  const str = showSecond ? 'HH:mm:ss' : 'HH:mm';
	  this.props.timeChange(value && value.format(str));
	}

	render() {
		const showSecond = false;

		return(
		  <div className="timepicker">
		    <TimePicker
		      style={{ width: 120 }}
		      showSecond={showSecond}
		      defaultValue={this.props.defaultValue}
		      onChange={this.onChange}
		    />
		  </div>
		);
	}
}

export default PickTime;
