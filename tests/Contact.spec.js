/**
 * Created by iross on 8/5/2015.
 */
var React = require('react/addons');
var expect = require('expect');
var TestUtils = React.addons.TestUtils;
var Contact = require('../public/js/components/Contact');
import ViewModule from '../public/js/actions/ViewActionCreators.js';
import { deleteContact, __RewireAPI__ as ViewRewireAPI} from '../public/js/actions/ViewActionCreators.js';

var P = 12;


describe('fun', function(){
    it('does', function(){
        ViewModule.__Rewire__('_deleteContact', function(){ P = 44;});
    })
});








describe('Contact: ', function () {
    describe('Rendering into document: ', function () {
        var component;
        describe('When no properties are passed in: ', function () {
            beforeEach(function(){
                component = TestUtils.renderIntoDocument(<Contact />)
            });

            it('renders the default contact ', function(){
                expect(component.getDOMNode().textContent).toContain('FirstName');
                expect(component.getDOMNode().textContent).toContain('LastName');
                expect(component.getDOMNode().textContent).toContain('me@you.com');
            });

            it('does not render a delete area', function(){
                var editDelete = TestUtils.scryRenderedDOMComponentsWithClass(component, 'edit-delete');
                expect(editDelete.length).toBe(0);
            });

            it('renders the hidden div instead of the delete area', function(){
                var editEmpty = TestUtils.scryRenderedDOMComponentsWithClass(component, 'edit-empty');
                expect(editEmpty.length).toBe(1);
            });
        });

        describe('When contact properties are passed: ', function () {
            beforeEach(function(){
                component = TestUtils.renderIntoDocument(<Contact first="Joe" last="Schmoe" email="me@yourmoms.com" />)
            });

            it('renders the default contact ', function(){
                expect(component.getDOMNode().textContent).toContain('Joe');
                expect(component.getDOMNode().textContent).toContain('Schmoe');
                expect(component.getDOMNode().textContent).toContain('me@yourmoms.com');
            });
        });

        describe('When showEdit is true: ', function () {
            beforeEach(function(){
                component = TestUtils.renderIntoDocument(<Contact first="Joe" last="Schmoe" email="me@yourmoms.com" showEdit="true" />)
            });

            it('does not render a hidden area', function () {
                var editEmpty = TestUtils.scryRenderedDOMComponentsWithClass(component, 'edit-empty');
                expect(editEmpty.length).toBe(0);
            });

            it('renders a delete area', function(){
                ViewModule.__Rewire__('_deleteContact', function(){ P = 44;});
                var editDelete = TestUtils.findRenderedDOMComponentWithClass(component, 'edit-delete');
                var x = editDelete.getDOMNode();
                console.log(P);
                TestUtils.Simulate.click(x);
                console.log(P);
                expect(x.textContent).toContain('Delete');

            });
            //it('d', function(){
            //    var editDelete = TestUtils.findRenderedDOMComponentWithClass(component, 'edit-delete');
            //    console.log(editDelete);
            //})

        });
    });
});