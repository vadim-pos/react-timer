import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { Countdown } from '../../components/countdown.jsx';

describe('Countdown', () =>{
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should set state to started and countdown', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');
            
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should not set count < 0', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);
            
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });

        it('should pause countdown when paused', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');
            
            setTimeout(() => {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            }, 1001)
        });

        it('should stop and reset countdown when stopped', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');
            
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            }, 1001)
        });
    });
});