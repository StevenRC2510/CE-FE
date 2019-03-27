
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import './index.css';

class SelectSarch extends React.PureComponent {

    render() {
        const { options } = this.props;
        return (
            <Form>
                <Form.Group controlId="findCE">
                    <Form.Control className="findSelect" as="select">
                        {options.map((item, key) => (
                            <option key={key} value={item}> {item} </option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Form>
        );
    }
}
SelectSarch.propTypes = {
    options: PropTypes.array
}
export default SelectSarch;