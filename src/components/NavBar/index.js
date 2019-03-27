import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Form } from 'react-bootstrap';

import './index.css';
class NavBar extends React.PureComponent {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <div className="ctn-headerNav">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand href="#home"><b> cebroker </b></Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home"> features </Nav.Link>
                            <Nav.Link href="#link"> Plans </Nav.Link>
                            <NavDropdown title="Organizations" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"> Any thing </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2"> Any thing 2 </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link" bsPrefix="text-select"> Browse courses </Nav.Link>
                            <Nav.Link href="#link"> Support </Nav.Link>
                            <Form inline>
                                <div>
                                    <Button className="btn-header" variant="outline-dark"> Sign in </Button>
                                </div>
                                <div>
                                    <Button className="btn-header2" variant="success"> 7 day trial </Button>
                                </div>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}

export default NavBar;