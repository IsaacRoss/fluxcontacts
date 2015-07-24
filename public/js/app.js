var React = require('react'),
    xhr = require('./lib/xhr'),
    ContactManager = require('./components/ContactManager'),
    ContactViewer = require('./components/ContactViewer'),
    ContactForm = require('./components/ContactForm');


var App = React.createClass({
    getInitialState(){
        return {
            contacts: []
        }
    },
    loadContacts(){
        xhr.getJSON('http://localhost:3000/contacts', function(err, contacts){
            this.setState({
                contacts: contacts
            })
        }.bind(this));
    },
    addContact(contact){
        xhr.postJSON('http://localhost:3000/contacts', contact, function(err, contacts){
           this.loadContacts();
        }.bind(this))
    },
    componentDidMount(){
        this.loadContacts();
    },
    deleteContact(id){
        xhr.deleteJSON('http://localhost:3000/contacts/' + id, function(err, res){
            this.loadContacts();
        }.bind(this))
    },
    submitContact(contact){
        event.preventDefault();
        this.addContact(contact);
    },
    render(){
        return (
           <div>
               <ContactManager contacts={this.state.contacts} deleteContact={this.deleteContact} />
               <hr />
               <ContactViewer contacts={this.state.contacts} />
               <br />
               <ContactForm submitContact={this.submitContact} />

           </div>
        )
    }
});





React.render(<App />, document.getElementById('contact-app'));


