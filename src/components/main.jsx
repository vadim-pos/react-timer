import React from 'react';

import { Nav } from './nav.jsx';

export let Main = props => {
    return(
        <div>
            <Nav/>
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    {props.children}
                </div>
            </div>
        </div>
    );
};