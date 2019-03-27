import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Collapse, Form } from 'react-bootstrap';
import './index.css';

const Filter = ({ title, open, state, id, data }) => {
    return (
        <div className="lines">
            <Container className="ctn-filters">
                {
                    state ?
                        <div className="ctn-titles">
                            <b className="title-filter"> {title} </b>
                            <i onClick={open} class="fas fa-angle-up" />
                        </div>
                        :
                        <div className="ctn-titles">
                            <b className="title-filter"> {title} </b>
                            <i onClick={open} class="fas fa-angle-down" />
                        </div>
                }

                <Row>
                    <Col>
                        <Collapse in={state}>
                            <div id={id}>
                                <Form>
                                    <Form.Group>
                                        {data.filters.map((filter, index) =>
                                            <Form.Check
                                                key={index}
                                                type="radio"
                                                label={filter.name}
                                                name={filter.name}
                                                id={index}
                                            />
                                        )}
                                        <div className="my-3">
                                            {data.filters.length > 2 && <b className="view-text">{'View More'}</b>}
                                        </div>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

Filter.prototype = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    state: PropTypes.bool,
    open: PropTypes.func,
}

export default Filter;