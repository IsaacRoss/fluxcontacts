var React = require('react'),
     ContactsStore = require('./stores/ContactsStore'),
     ViewActionCreators = require('./actions/ViewActionCreators'),
    ContactManager = require('./components/ContactManager'),
    ContactViewer = require('./components/ContactViewer'),
    ContactForm = require('./components/ContactForm');


var App = React.createClass({
    getInitialState () {
        return ContactsStore.getState();
    },

    componentDidMount () {
        ContactsStore.addChangeListener(this.handleStoreChange);
        ViewActionCreators.loadContacts();
    },

    componentWillUnmount () {
        ContactsStore.removeChangeListener(this.handleStoreChange);
    },

    handleStoreChange () {
        this.setState(ContactsStore.getState());
    },

    deleteContact (contact) {
        ViewActionCreators.deleteContact(contact);
    },
    submitContact (contact){
        ViewActionCreators.addContact(contact);
    },

    render () {
        if (!this.state.loaded) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <ContactManager contacts={this.state.contacts} deleteContact={this.deleteContact} />
                <hr />
                <ContactViewer contacts={this.state.contacts} />
                <br />
                <ContactForm submitContact={this.submitContact} />
            </div>
        );
    }
});

React.render(<App />, document.getElementById('contact-app'));