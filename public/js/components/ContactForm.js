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
          first_name: {value: '', valid: false }
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
    handleChange(name, value, valid){
        console.log(value)
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
                         placeholder="Enter First Name"
                         value={this.state.first_name.value}
                         inputChanged={this.handleChange}/>


                <button type="submit">Add Contact</button>

            </form>

        )
    }
});

module.exports = ContactForm;