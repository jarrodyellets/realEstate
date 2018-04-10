import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const NavBar = (props) => {
	return (
		<Navbar collapseOnSelect>
		  <Navbar.Header>
		    <Navbar.Brand>
		      <a href="#brand">
		      	<img className="logo" src="https://www.jarrodyellets.com/images/pillow/pillowLogo.jpg" />
		      </a>
		      <div className="logoTitle">Austin's premiere real estate</div>
		    </Navbar.Brand>
		    <Navbar.Toggle />
		  </Navbar.Header>
		  <Navbar.Collapse>
		    <Nav pullRight>
		      <NavItem eventKey={1} href="#">
		        Buy
		      </NavItem>
		      <NavItem eventKey={2} href="#">
		        Rent
		      </NavItem>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
		)
}

export default NavBar;