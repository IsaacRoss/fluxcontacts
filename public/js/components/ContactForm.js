/**
 * Created by iross on 7/24/2015.
 */
var React = require('react'),
    ViewActionCreator = require('../actions/ViewActionCreators'),
    Validations = require('../utils/Validations'),
    TsInput = require('../components/TsInput');


var ContactForm = React.createClass({
    getInitialState(){
      return {
          first_name: '',
          last_name: '',
          email: ''
      }
    },
    submitContact(event){
        event.preventDefault();
        var contact = {
            first: this.state.first_name,
            last: this.state.last_name,
            email: this.state.email
        };
        ViewActionCreator.addContact(contact);
    },
    handleChange(name, value){

        var newState = {};
        newState[name] = value
        this.setState(newState);
    },
    render(){
        return (
            <form onSubmit={this.submitContact}>
                <TsInput onChange={this.handleChange} name="First Name" fieldName="first_name" />
                <TsInput onChange={this.handleChange} name="Last Name" fieldName="last_name" />
                <TsInput onChange={this.handleChange} name="Email" fieldName="email" />

                <button type="submit">Add Contact</button>

            </form>

        )
    }
});

module.exports = ContactForm;