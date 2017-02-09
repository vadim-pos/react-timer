import React from 'react';
import { Clock } from './clock.jsx';

export class Countdown extends React.Component {
    render() {
        return(
            <div>
                <Clock totalSeconds={129}/>
            </div>     
        );
    }
};