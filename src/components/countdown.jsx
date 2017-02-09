import React from 'react';
import { Clock } from './clock.jsx';
import { CountdownForm } from './countdown-form.jsx';

export class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    handleSetCountdown = (seconds) => {
        this.setState({count: seconds});
    }

    render() {
        let {count} = this.state;
        return(
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>     
        );
    }
};