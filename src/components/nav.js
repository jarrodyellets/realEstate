import React from 'react';

const Nav = (props) => {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container navContainter">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <a href="#home" className="navbar-brand" id="n-home">
		      	<img className="logo" src="https://www.jarrodyellets.com/images/pillow/pillowLogo.jpg" />
		      	<div className="logoTitle">Austin's premiere real estate</div>
		      </a>
		    </div>
		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul className="nav navbar-nav navbar-right">
		        <li className="hvr-bounce-to-top" id="n-press"><a className="link" href="#press">Buy</a></li>
		        <li className="hvr-bounce-to-top" id="n-contact"><a className="link" href="#contact">Rent</a></li>
		      </ul>
		    </div>
		  </div>
		</nav>
		)
}

export default Nav;