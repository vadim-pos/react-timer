import React from 'react';
import { Link, IndexLink } from 'react-router';

export let Nav = (props) => {
    return(
        <nav className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer App</li>
                    <li><IndexLink to="/" activeClassName="link-active">Timer</IndexLink></li>
                    <li><Link to="countdown" activeClassName="link-active">Countdown</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li><a href="#" target="_blank">Github</a></li>
                </ul>
            </div>
        </nav>
    );
};