import React from 'react';
import PropTypes from 'prop-types';

import ShareBtn from '../shareBtn/';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'

import './index.css';

const Course = ({ image, title, description, hours, shape, price }) => {
    return (
        <Card bsPrefix="card-course">
            <Card.Body>
                <Container>
                    <Row>
                        {image ?
                            <div className="d-flex col-md-12">
                                <Col md={4} className="py-2">
                                    <Image src={`https://storage.cebroker.com/CEBroker/${image}`} width="100%" />
                                </Col>
                                <Col md={6} className="d-flex flex-column ctn-infoCourse">
                                    <b className="title-course"> {title} </b>
                                    <Button bsPrefix="btn-featured" disabled> {'FEATURED'} </Button>
                                    <span className="description-course"> {description} </span>
                                    <div className="d-flex flex-row">
                                        <span className="info-course"><i class="far fa-clock" /> {`${hours} Hours`} </span>
                                        <span className="mx-2 info-course"><i class="fas fa-laptop" /> {shape} </span>
                                    </div>
                                </Col>
                                <Col md={2} className="d-flex flex-column justify-content-between align-items-center">
                                    <b className="price-course"> $ {price} </b>
                                    <ShareBtn bsPrefix="btn-share">
                                        <i className="fas fa-share" />
                                    </ShareBtn>
                                </Col>
                            </div>
                            :
                            <div className="d-flex col-md-12">
                                <Col md={10} className="d-flex flex-column">
                                    <b className="title-course"> {title} </b>
                                    <Button bsPrefix="btn-featured" disabled> {'FEATURED'} </Button>
                                    <span className="description-course"> {description} </span>
                                    <div className="d-flex flex-row">
                                        <span className="info-course"><i class="far fa-clock" /> {`${hours} Hours`} </span>
                                        <span className="mx-2 info-course"><i class="fas fa-laptop" /> {shape} </span>
                                    </div>
                                </Col>
                                <Col md={2} className="d-flex flex-column justify-content-between align-items-center">
                                    <b className="price-course"> $ {price} </b>
                                    <ShareBtn bsPrefix="btn-share">
                                        <i className="fas fa-share" />
                                    </ShareBtn>
                                </Col>
                            </div>
                    
                        }
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

Course.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    hours: PropTypes.number,
    description: PropTypes.string,
    shape: PropTypes.string,
    price: PropTypes.string
}

export default Course;