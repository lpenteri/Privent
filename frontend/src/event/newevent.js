import React, { Component } from 'react'
import {Input} from 'reactstrap';
import '../css/newevent.css'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

Eos = require('eosjs')
config = {
  chainId: , // 32 byte (64 char) hex string
  keyProvider: 
  httpEndpoint: 'http://127.0.0.1:8888',
  expireInSeconds: 60,
  broadcast: true,
  verbose: false, // API activity
  sign: true
}

class NewEvent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name:"",
      desc:"",
      hard: 0,
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeValue = e => this.setState({[e.target.id]: e.target.value});
  
  handleSubmit(e){
  	e.preventDefault();
  	eos = Eos(config)

  	  }

	render(){
		
		
		return(
			
		<div className="Maintab jumbotron">
			<div>
			<div>
			<Input type="text" placeholder="Event Name" id="name" value={this.statename} onChange={this.handleChangeValue}/>
			</div>
			<br />
			<div>
			<Input type="textarea" placeholder="Description" id="desc" value={this.statedesc} onChange={this.handleChangeValue}/>
			</div>
			<br />
			<div>
			<DatePicker 
			 selected={this.state.startDate}
    onChange={this.handleChange}/>
			</div>
			<br />
			<div>
			<Input type="number" placeholder="Hard Cap" id="hard" value={this.statehard} onChange={this.handleChangeValue}/>
			</div>
			</div>
			<br />
			<button type="button" className="ct-button" onClick={this.handleSubmit} >Submit</button>
		</div>
		)
	}


}

export default NewEvent;