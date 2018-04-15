import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const NavBar = (props) => {
	return (
		<Navbar collapseOnSelect fluid={props.intro ? false : true}>
		  <Navbar.Header>
		    <Navbar.Brand>
		      <a href="#brand">
		      	<img onClick={!props.intro ? props.changeIntro: null}className="logo" src="https://www.jarrodyellets.com/images/pillow/pillowLogo.jpg" />
		      </a>
		      <div className="logoTitle">Austin's Real Estate Portal</div>
		    </Navbar.Brand>
		    <Navbar.Toggle />
		  </Navbar.Header>
		  <Navbar.Collapse>
		    <Nav pullRight>
		      <NavItem onClick={() => {props.changeMode.bind(props.changeMode, "buy"); props.intro ? props.changeIntro(): null}} eventKey={1} href="#">
		        Buy
		      </NavItem>
		      <NavItem onClick={() => {props.changeMode.bind(props.changeMode, "rent"); props.intro ? props.changeIntro(): null}} eventKey={2} href="#">
		      	Rent
		      </NavItem>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
		)
}

export default NavBar;