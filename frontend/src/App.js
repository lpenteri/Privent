import React, { Component } from 'react'
//import axios from 'axios'
import { Route } from 'react-router';
import EOSIOClient from './utils/eosio-client'
import IOClient from './utils/io-client'
import EventUi from './event/eventUi'
import NewEvent from './event/newevent'
import SearchArtist from './event/searchArtist'
import Head from './npmComponents/header'
import Nav from './npmComponents/navbar'

class App extends Component {
  state = {


  }

  // Instantiate shared eosjs helper and socket io helper
  constructor (props) {
    super(props)
    const contractAccount = process.env.REACT_APP_EOSIO_CONTRACT_ACCOUNT
    this.eosio = new EOSIOClient(contractAccount)
    this.io = new IOClient()
  }

  // Enable Realtime updates via Socket.io
  async componentDidMount () {

  }

  render () {
    return (
      <div>
        <Head/>
        <Route path='/eventui' component={EventUi}/>
        <Route path='/searchartist' component={SearchArtist}/>
        <Route path='/newevent' component={NewEvent} />
      </div>

    )
  }
}
App.displayName = 'App' // Tell React Dev Tools the component name

export default App
