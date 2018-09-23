import React, { Component } from 'react';
import '../css/header.css';

class Head extends Component {


render(){
	return(
	<div className="header-wrapper">
    	<header className='header'>
     		<div className="right-side">
      			<div className="thubnail">
      			<div>
      				<img className="image-thumb" src= "/stauros.jpg" />
      			</div>
      			</div>
	      		<div className="meta">
	      			<div className="display-name">
	      			<p className='username'>Stavros Antoniadis </p>
	      			</div>
      			</div>
      		</div>
     	</header>
    </div>
	)
}

}

export default Head;
