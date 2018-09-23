import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';



const NavbarLink = ({
  className = 'col-link p3',
  text,
  ...props }) => (
  <NavLink
    className={className}
    {...props}
  >
    {text}
  </NavLink>
);

const activeClassName = 'active';

const UserLink = ({
  className = 'col-link p3',
  iconImageSrc,
  text,
  ...props }) => (
  <NavLink
    className={className}
    {...props}
  >
    <span>
        <img className="nav-icon" src="../src/images/nav_icons/512-1.png"/>
    </span>
    <div className="nav-text">
    {text}
    </div>
  </NavLink>
);

class Nav extends Component {
render(){
	return(
				<div className="page-content container-fluid clearfix">
					<div role="navigation" className="navigationbar">
						<nav className="menu">
							<a className="menu-item selected"  href="/eventUi" target="mysettings">
							 <img className="nav-icon" src="favicon.ico"/>
							<span id="textdec">Explore</span>
							</a>
							<a className="menu-item" href="settings/security" target="mysettings">
							<img className="nav-icon" src="favicon.ico"/>
							<span id="textdec">New Event</span>
							</a>
						</nav>
					</div>
				</div>

	)
}
}

export default Nav;
