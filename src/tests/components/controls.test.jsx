import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { Controls } from '../../components/controls.jsx';

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            let $elem = $(ReactDOM.findDOMNode(controls));
            let pauseBtn = $elem.find('button:contains(Pause)');

            expect(pauseBtn.length).toBe(1);
        });

        it('should render start when paused', () => {
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            let $elem = $(ReactDOM.findDOMNode(controls));
            let startBtn = $elem.find('button:contains(Start)');

            expect(startBtn.length).toBe(1);
        });
    });
});