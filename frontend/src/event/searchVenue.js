import React from 'react';
import SearchLoc from '../npmComponents/searchLocation';
import PickDate from '../npmComponents/pickDate';
import '../css/searchVenue.css'
const queryString = require('query-string');




class SearchVenue extends React.PureComponent {

    constructor(props)
    {
      super(props);

      this.handleSearchLocChange = this.handleSearchLocChange.bind(this);
      this.handleDateFromChange = this.handleDateFromChange.bind(this);
      this.handleDateToChange = this.handleDateToChange.bind(this);
      this.handleHourFromChange = this.handleHourFromChange.bind(this);
      this.handleHourToChange = this.handleHourToChange.bind(this);
      this.state = {searchLoc: '',
                    dateFrom:undefined,
                    dateTo:undefined,
                    hourFrom:'00:00',
                    hourTo:'23:59',
                    search:false
             };

    }
    handleSearchLocChange(_search){
          this.setState({searchLoc : _search});
    }clearfix

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

     submitHandler(e){
      e.preventDefault();

      var parsed= {};
      parsed.searchLoc = this.state.searchLoc;
      parsed.dateFrom = this.state.dateFrom;
      parsed.dateTo = this.state.dateTo;
      parsed.hourFrom = this.state.hourFrom;
      parsed.hourTo = this.state.hourTo;

      this.setState({search : true})
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
              <input type="submit" className="submitButton" value="Search Venues"/>
          </form>
        </div>
      </div>
    </div>;


    if(this.state.search===true){
      return (
        <div>
          {searchBar}
          
        </div>
      );
    }
    if(this.state.search===false){
      return (
        <div>
          {searchBar}
        </div>
      );
    }



  }
}
export default SearchVenue;
