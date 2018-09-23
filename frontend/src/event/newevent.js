import React, { Component } from 'react'
import {Input} from 'reactstrap';
import '../css/newevent.css'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const Eos = require('eosjs')
const config = {
  chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f', // 32 byte (64 char) hex string
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
  
 async handleSubmit(e){
  	e.preventDefault();
  	let actor='founder'
  	let authority = 'active'
  	let eos = Eos(config)
  		 try{
            const contract = await eos.contract('prevent');

            try{
              const emplaceuser = await contract.start('founder','politiko',100,200,{amount:this.state.hard, symbol:'PUSD'},
                                     {authorization: [`${actor}@${authority}`]}
                                    );
            }
            catch(err) {
            	console.log(err)
            }
        }
        catch(err) {
        	console.log(err)
        }
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