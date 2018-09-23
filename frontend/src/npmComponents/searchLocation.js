import React, {Component} from "react"
import '../css/searchLocation.css'

class SearchLoc extends Component {

	constructor(props) {
	    super(props);
	    this.handleSearchChange = this.handleSearchChange.bind(this);
	}

	handleSearchChange(e) {
	    this.props.handleSearchLocChange(e.target.value);
	}

	render() {
		const value=this.props.value;
		return(
		  <input
		    aria-describedby="search"
		    className="SearchStyle"
		    value={value}
		    name="search"
		    required
		    type="text"
		    placeholder="Location, name or address..."
		    onChange={this.handleSearchChange}/>
		);

	}
}

export default SearchLoc;
