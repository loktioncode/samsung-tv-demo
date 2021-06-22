import React from 'react';
import './Nav.css';
import { NavDropdown } from 'react-bootstrap';

const NavItem = (props) => {
    return (
        <React.Fragment>
            <NavDropdown title={props.title} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </React.Fragment>

    );
}

export default NavItem;
