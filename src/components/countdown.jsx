import React from 'react';

import { Clock } from './clock.jsx';
import { CountdownForm } from './countdown-form.jsx';
import { Controls } from './controls.jsx';

export class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        };
    }

    componentWillUnmount = () => {
        clearInterval(this.timer);
        this.timer = undefined;
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    }

    startTimer = () => {
        this.timer = setInterval(() => {
            let newCount = this.state.count -1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            if (newCount === 0) {
                this.setState({countdownStatus: 'stopped'})
            }
        }, 1000);
    }

    handleSetCountdown = (seconds) => {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    }

    handleStatusChange = (newStatus) => {
        this.setState({countdownStatus: newStatus});
    }

    render() {
        let {count, countdownStatus} = this.state;
        let renderControls = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            }
        };
        return(
            <div>
                <Clock totalSeconds={count}/>
                {renderControls()}
            </div>     
        );
    }
};