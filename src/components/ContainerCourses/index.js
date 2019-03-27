import React from 'react';
import PropTypes from 'prop-types';
import Course from '../Course/';

import { Container, Row, Col, Form, Spinner } from 'react-bootstrap'
import './index.css';

const ContainerCourses = ({ courses, page }) => {
    return (
        <Container style={{ background: '#fcfbfb', marginTop: '6%', boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.1)' }}>
            <Row className="">
                <Col md={6} className="d-flex align-items-center">
                    <span className="text-resultpages"><b className="border-font"> {`Page ${page}`}</b> of <b className="border-font"> {`${courses.data && courses.data.items.length} results`} </b></span>
                </Col>
                <Col md={6}>
                    <Form>
                        <Form.Group as={Row} controlId="sortedBy" className="ctn-sorted">
                            <Form.Label> Sorted by: </Form.Label>
                            <Form.Control style={{ width: '40%' }} as="select">
                                <option selected>{'Relevance'}</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            {courses.data ? courses.data.items.map((course, index) => {
                return (
                    <Course
                        key={index}
                        image={course.course.featuredBanner}
                        title={course.course.name}
                        description={course.course.provider.name}
                        hours={course.totalHours}
                        shape={course.course.deliveryMethod ? course.course.deliveryMethod.description : 'ONCOURSE LEARNING'}
                        price={course.price ? course.price.toFixed(2) : '0'}
                    />
                );
            }
            ) :
                <div className=" d-flex justify-content-center align-items-center">
                    <Spinner animation="border" variant="primary" />
                </div>

            }
        </Container>
    )
}

ContainerCourses.propTypes = {
    courses: PropTypes.any,
    page: PropTypes.number
}
export default ContainerCourses;