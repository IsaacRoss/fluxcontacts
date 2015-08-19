/**
 * Created by iross on 8/19/2015.
 */
var expect = require('expect');
import {default as defaultBar} from './bar.js';


describe('no rewiring: ', function () {
    it('says what it should', function(){
        expect(defaultBar.cooler()).toBe('I am cool');
    })
});

describe('using rewire: ', function () {
    beforeEach(() => {
        defaultBar.__Rewire__('foo', {
            cool: function(){
                return 'this is even cooler than that crap';
            }
        })
    });

    afterEach(() => {
        defaultBar.__ResetDependency__('foo');
    });

    it('uses the rewired version', function(){
        expect(defaultBar.cooler()).toBe('this is even cooler than that crap')
    })
});