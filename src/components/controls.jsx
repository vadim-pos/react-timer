import React from 'react';

export class Controls extends React.Component {
    static propTypes = {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    }

    onStatusChange = (newStatus) => {
        return () => {
            this.props.onStatusChange(newStatus);
        };
    }

    render() {
        let {countdownStatus} = this.props;
        let renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button onClick={this.onStatusChange('paused')} className="button secondary">Pause</button>
            } else if (countdownStatus === 'paused') {
                return <button onClick={this.onStatusChange('started')} className="button primary">Start</button>
            }
        };

        return(
            <div className="controls">
                {renderStartStopButton()}
                <button onClick={this.onStatusChange('stopped')} className="button alert hollow">Clear</button>
            </div>
        );
    }
};