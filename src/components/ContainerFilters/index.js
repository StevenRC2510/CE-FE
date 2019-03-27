import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter/';
import { Row, Col } from 'react-bootstrap'

import './index.css'

const ContainerFilters = ({ filters, open, state }) => {
    return (
        <div className="ctn-filters-results">
            <Row>
                <Col className="ctn-title-results">
                    <i class="fas fa-align-center" />
                    <b className="title-result"> FILTER COURSE RESULTS </b>
                </Col>
            </Row>
            {filters.map((filterData, index) =>
                <Filter key={index} id={filterData.id} title={filterData.title} data={filterData} open={open} state={state} />
            )}
        </div>
    )
}

ContainerFilters.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.object).isRequired,
    open: PropTypes.func,
    state: PropTypes.bool,
}

export default ContainerFilters;