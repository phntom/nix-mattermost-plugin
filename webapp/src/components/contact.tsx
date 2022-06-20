// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';

export default function HelpContact(): JSX.Element {
    return (
        <div>
            <h1 className='markdown__heading'>
                {'Contact Us'}
            </h1>
            <hr/>
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
    );
}
