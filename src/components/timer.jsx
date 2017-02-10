import  React from 'react';

import { Clock } from './clock.jsx';
import { Controls } from './controls.jsx';

export class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            timerStatus: 'paused'
        }
    }

    timer = undefined;

    componentWillUnmount = () => {
        clearInterval(this.timer);
        this.timer = undefined;
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0, timerStatus: 'paused'});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    }

    handleStatusChange = (newStatus) => {
        this.setState({timerStatus: newStatus});
    }

    startTimer = () =>{
        this.timer = setInterval(() => {
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000);
    }

    render() {
        let {count, timerStatus} = this.state;

        return(
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div> 
        );
    }
}