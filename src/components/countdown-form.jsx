import React from 'react';

export class CountdownForm extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        let secondsString = this.refs.seconds.value;

        if (secondsString.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(secondsString, 10));
        }
    }

    render() {
        return(
            <div>
                <form className="countdown-form" onSubmit={this.onSubmit} ref="form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
}