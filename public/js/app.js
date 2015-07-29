var React = require('react'),
     ContactsStore = require('./stores/ContactsStore'),
    ContactSummaryStore = require('./stores/ContactSummaryStore'),
     ViewActionCreators = require('./actions/ViewActionCreators'),
    ContactManager = require('./components/ContactManager'),
    ContactViewer = require('./components/ContactViewer'),
    ContactForm = require('./components/ContactForm');


var Summary = React.createClass({
    getInitialState(){
        return ContactSummaryStore.getState();
    },
    componentDidMount(){
        ContactSummaryStore.addChangeListener(this.handleStoreChange);
    },
    componentWillUnmount(){
        ContactSummaryStore.removeChangeListener(this.handleStoreChange);
    },
    handleStoreChange(){
        this.setState(ContactSummaryStore.getState)
    },
    render(){
        return (
            <div>
                There are {this.state.contactNumber} contacts loaded.
            </div>
        )
    }
});

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
    render () {
        if (!this.state.loaded) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <ContactManager contacts={this.state.contacts} />
                <hr />
                <ContactViewer contacts={this.state.contacts} />
                <br />
                <ContactForm submitContact={this.submitContact} />
                <Summary />
            </div>
        );
    }
});

React.render(<App />, document.getElementById('contact-app'));