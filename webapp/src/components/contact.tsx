// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import {Modal} from 'react-bootstrap';

type Props = {
};

type State = {
    show: boolean;
};

export default class HelpContact extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            show: true,
        };
    }

    doHide = () => {
        this.setState({show: false});
    }

    render() {
        return (
            <Modal
                dialogClassName='a11y__modal contact-modal'
                show={this.state.show}
                role='dialog'
                aria-labelledby='contactModalLabel'
                onHide={this.doHide}
            >
                <Modal.Header closeButton={true}>
                    <Modal.Title
                        componentClass='h1'
                        id='contactModalLabel'
                    >
                        {'Contact us'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='contact-modal__content'>
                        <div>
                            <h2 className='markdown__heading'>
                                {'Email'}
                            </h2>
                            <p>
                                {'Send us your requests and concerns via email at '}
                                <a href='mailto:support@kix.co.il'>
                                    {'support@kix.co.il'}
                                </a>
                            </p>
                            <h2 className='markdown__heading'>
                                {'Help Channel'}
                            </h2>
                            <p>
                                {'Logged in users may contact the support staff by joining '}
                                <a href='/nix/channels/help'>
                                    {'channel HELP!'}
                                </a>
                            </p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}
