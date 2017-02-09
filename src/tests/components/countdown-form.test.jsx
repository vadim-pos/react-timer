import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { CountdownForm } from '../../components/countdown-form.jsx';

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown() if valid seconds entered', () => {
        let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        let $elem = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($elem.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountdown() if invalid seconds entered', () => {
        let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        let $elem = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109qwewe';
        TestUtils.Simulate.submit($elem.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});