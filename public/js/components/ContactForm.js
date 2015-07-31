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
          first_name: {value: '', valid: false },
          last_name: {value: '', valid: false },
          email: {value: '', valid: false}
      }
    },
    submitContact(event){
        event.preventDefault();
        var contact = {
            first: this.state.first_name,
            last: this.state.last_name,
            email: this.state.email
        };
        var valid = Object.keys(contact).every(function(x){
            return contact[x].valid === true;
        });
        if(valid){
            ViewActionCreator.addContact(contact);
        }

    },
    handleChange(name, value, valid){
        var newState = {};
        newState[name] = {
            value,
            valid
        };
        this.setState(newState);
    },
    render(){
        return (
            <form onSubmit={this.submitContact}>
                <TsInput name="First Name"
                         fieldName="first_name"
                         validation={Validations.required}
                         validationMessage="This Field Is Required"
                         placeholder="Enter First Name"
                         inputChanged={this.handleChange}/>

                <TsInput name="Last Name"
                         fieldName="last_name"
                         validation={Validations.required}
                         validationMessage="This Field Is Required"
                         placeholder="Enter Last Name"
                         inputChanged={this.handleChange}/>

                <TsInput name="Email"
                         fieldName="email"
                         validation={Validations.validEmail}
                         validationMessage="That is not a valid email"
                         placeholder="Enter email"
                         inputChanged={this.handleChange}/>


                <button id="submit" type="submit">Add Contact</button>

            </form>

        )
    }
});

module.exports = ContactForm;