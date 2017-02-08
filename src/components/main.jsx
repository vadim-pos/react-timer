import React from 'react';

import { Nav } from './nav.jsx';

export let Main = props => {
    return(
        <div>
            <Nav/>
            <p>Main Component</p>
            {props.children}
        </div>
    );
};