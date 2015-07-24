/**
 * Created by iross on 7/24/2015.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var { EventEmitter } = require('events');
var { ActionTypes } = require('../constants/constants');
var assign = require('react/lib/Object.assign');

var events = new EventEmitter();
var CHANGE_EVENT = 'CHANGE';

var state = {
    contacts: [],
    loaded: false
};

var setState = (newState) => {
    assign(state, newState);
    events.emit(CHANGE_EVENT);
};

var ContactsStore = {
    addChangeListener (fn) {
        events.addListener(CHANGE_EVENT, fn);
    },

    removeChangeListener (fn) {
        events.removeListener(CHANGE_EVENT, fn);
    },

    getState () {
        return state;
    }
};

ContactsStore.dispatchToken = AppDispatcher.register((payload) => {
    var { action } = payload;

    if (action.type === ActionTypes.CONTACTS_LOADED) {
        setState({
            loaded: true,
            contacts: action.contacts
        });
    }

    if (action.type === ActionTypes.CONTACT_DELETED) {
        var newContacts = state.contacts.filter((contact) => {
            return contact.id !== action.contact;
        });
        setState({ contacts: newContacts });
    }

    if( action.type === ActionTypes.CONTACT_ADDED){
        setState({
            loaded: true,
            contacts: Array.prototype.slice.apply(action.contact)
        });
    }

});

module.exports = ContactsStore;

