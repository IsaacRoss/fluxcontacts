/**
 * Created by iross on 7/24/2015.
 */
var React = require('react'),
    ViewActionCreator = require('../actions/ViewActionCreators');


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
    handleChange(name, event){
        var newState = {};
        newState[name] = event.target.value;
        this.setState(newState);
    },
    render(){
        return (
            <form onSubmit={this.submitContact}>
                <label htmlFor="first_name">First Name</label>
                <br />
                <input
                    type="text"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handleChange.bind(this, 'first_name')} />
                <br />
                <label htmlFor="first_name">Last Name</label>
                <br />
                <input
                    type="text"
                    name="first_name"
                    value={this.state.last_name}
                    onChange={this.handleChange.bind(this, 'last_name')} />
                <br />
                <label htmlFor="first_name">Email</label>
                <br />
                <input
                    type="text"
                    name="first_name"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this, 'email')} />
                <br />
                <button type="submit">Add Contact</button>
            </form>
        )
    }
});

module.exports = ContactForm;