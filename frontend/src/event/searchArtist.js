import React from 'react';
import SearchLoc from '../npmComponents/searchLocation';
import PickDate from '../npmComponents/pickDate';
import '../css/searchArtist.css'
import axios from 'axios';
import ResultEntity from '../npmComponents/ResultEntity';
const queryString = require('query-string');




class SearchArtist extends React.PureComponent {

    constructor(props)
    {
      super(props);

      this.handleSearchLocChange = this.handleSearchLocChange.bind(this);
      this.handleDateFromChange = this.handleDateFromChange.bind(this);
      this.handleDateToChange = this.handleDateToChange.bind(this);
      this.handleHourFromChange = this.handleHourFromChange.bind(this);
      this.handleHourToChange = this.handleHourToChange.bind(this);
      this.changeResults = this.changeResults.bind(this);
      this.handleVenueClicked = this.handleVenueClicked.bind(this);
      this.state = {searchLoc: '',
                    dateFrom:undefined,
                    dateTo:undefined,
                    hourFrom:'00:00',
                    hourTo:'23:59',
                    search:false,
                    result:''
             };

    }
    handleSearchLocChange(_search){
          this.setState({searchLoc : _search});
    }

    handleVenueClicked(e)
    {
      console.log(e);
    }

    handleDateFromChange(from){
          this.setState({dateFrom : from});
    }

    handleDateToChange(to){
          this.setState({dateTo : to});
    }

    handleHourFromChange(from){
          this.setState({hourFrom : from});
    }
    handleHourToChange(to){
          this.setState({hourTo : to});
    }
    changeResults(result)
    {
      this.setState({result: result , search: true});
    }

    async submitHandler(e){
      e.preventDefault();

      var parsed = {};
      parsed.searchLoc = this.state.searchLoc;
      parsed.dateFrom = this.state.dateFrom;
      parsed.dateTo = this.state.dateTo;
      parsed.hourFrom = this.state.hourFrom;
      parsed.hourTo = this.state.hourTo;


      await axios({
         method:'get',
         url:'http://localhost:4000/searchArtists',
         responseType:'json'
       })
       .then((response) => {
         if(response.data.length === 0){

         }else{
           this.changeResults(response.data)
         }
       })
       .catch((err) => {
         console.log(err);
       });
    }

  renderItems() {
    const { result } = this.state
    return result.map(item => <ResultEntity key={item._id} item={item} click = {this.handleVenueClicked}/>)
  }

  render() {
    let searchBar = <div>
       <div className="row pad">
        <div className="col-lg-6">
          <form onSubmit={this.submitHandler.bind(this)}>
                <div className="formstyle">
                  <SearchLoc handleSearchLocChange={this.handleSearchLocChange}/>
                </div>
             <div className="clearfix">
                <PickDate from={this.state.dateFrom} to={this.state.dateTo} fromChange ={this.handleDateFromChange} toChange={this.handleDateToChange} timeFromChange={this.handleHourFromChange} timeToChange={this.handleHourToChange}/>
             </div>
              <input type="submit" className="submitButton" value="Search Artists"/>
          </form>
        </div>
      </div>
    </div>;


    if(this.state.search===true){
      return (
        <div className = 'centerplz'>
          {searchBar}
          <div>{ this.renderItems() }</div>
        </div>
      );
    }
    if(this.state.search===false){
      return (
        <div className = 'centerplz'>
          {searchBar}
        </div>
      );
    }



  }
}
export default SearchArtist;
