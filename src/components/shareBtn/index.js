
import React from 'react';
import { Button } from 'react-bootstrap'


class ShareBtn extends React.PureComponent {

    render() {
        return (
            <Button {...this.props} />
        );
    }
}

export default ShareBtn;