
import React from 'react';
import PropTypes from 'prop-types';

import SelectSarch from '../selectSearch/';
import { Navbar, Nav, FormControl, Container, Row, Col, InputGroup } from 'react-bootstrap';

import './index.css';


const SearchContainer = ({ name, handleChange }) => {
    return (

        <Navbar variant="dark" className="d-flex flex-column bar">
            <Container className="d-flex justify-content-center align-items-center">
                <Row className="my-3">
                    <Col>
                        <p className="title-search"> Find CE for a </p>
                    </Col>
                    <div>
                        <SelectSarch options={['Florida']} />
                    </div>
                    <div className="mx-2">
                        <SelectSarch options={['Medical Doctor']} />
                    </div>
                </Row>
            </Container>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputSearch"><i className="fas fa-search" /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    name={name}
                    onChange={handleChange}
                    placeholder="Search courses and providers"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link> {'COURSES'} </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link> {'PROVIDERS'} </Nav.Link>
                </Nav.Item>
            </Nav>

        </Navbar>
    )
}

SearchContainer.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired

}
export default SearchContainer;