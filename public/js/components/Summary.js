/**
 * Created by iross on 7/29/2015.
 */
var React = require('react'),
    ContactSummaryStore = require('../stores/ContactSummaryStore');

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
        this.setState(ContactSummaryStore.getState())
    },
    render(){
        return (
            <div>
                There are {this.state.contactNumber} contacts loaded.
            </div>
        )
    }
});

module.exports = Summary;