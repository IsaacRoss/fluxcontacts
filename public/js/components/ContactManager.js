/**
 * Created by iross on 7/24/2015.
 */
var React = require('react'),
    Contact = require('./Contact');

var ContactManager = React.createClass({
    render(){
        var conts =  this.props.contacts.map((contact) => {
            return  <Contact id={contact.id}
                             first={contact.first}
                             last={contact.last}
                             email={contact.email}
                             showEdit="true">
            </Contact>
        });
        return (
            <div>{conts}</div>
        )
    }
});



module.exports = ContactManager;