/**
 * Created by iross on 7/24/2015.
 */
var React = require('react'),
    Contact = require('./Contact');

var ContactViewer = React.createClass({
    render(){
        var conts =  this.props.contacts.map((contact) => {
            return  <Contact first= {contact.first} last={contact.last} email={contact.email}>
            </Contact>
        });
        return (
            <div>{conts}</div>
        )
    }
});


module.exports = ContactViewer;