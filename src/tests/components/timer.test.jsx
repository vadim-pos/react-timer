import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { Timer } from '../../components/timer.jsx';

describe('Timer', () => {
   it('should exist', () => {
    expect(Timer).toExist();
   });

   describe('startTimer', () => {
        it('should run timer when started', (done) => {
            let timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');

            setTimeout(() => {
                expect(timer.state.count).toBe(3);
                expect(timer.state.timerStatus).toBe('started');
                done();
            }, 3001);
        });
   });

   describe('handleStatusChange', () => {
        it('should pause timer when paused', (done) => {
            let timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');

            setTimeout(() => {
                timer.handleStatusChange('paused');
                expect(timer.state.count).toBe(3);
                expect(timer.state.timerStatus).toBe('paused');
                done();
            }, 3001);
        });

        it('should drop and pause timer when stopped', (done) => {
            let timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');

            setTimeout(() => {
                timer.handleStatusChange('stopped');
                expect(timer.state.count).toBe(0);
                expect(timer.state.timerStatus).toBe('paused');
                done();
            }, 3001);
        });
   });
});