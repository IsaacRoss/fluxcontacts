/**
 * Created by isaacross on 7/28/15.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var { EventEmitter } = require('events');
var { ActionTypes, PayloadSources } = require('../constants/constants');
var ContactsStore = require('../stores/ContactsStore');
var assign = require('react/lib/Object.assign');


var events = new EventEmitter();
var CHANGE_EVENT = 'CHANGE';

var state = {
    contactNumber: 0
};

var setState = (newState) => {
    assign(state, newState);
    events.emit(CHANGE_EVENT);
};

var ContactSummaryStore = {
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

ContactSummaryStore.dispatchToken = AppDispatcher.register((payload) => {
    var { action } = payload;


    if (action.type === ActionTypes.CONTACTS_LOADED) {
        AppDispatcher.waitFor([ContactsStore.dispatchToken]);
        setState({
            contactNumber: action.contacts.length
        });
    }

    if (payload.source === PayloadSources.SERVER_ACTION && action.type === ActionTypes.CONTACT_DELETED) {
        AppDispatcher.waitFor([ContactsStore.dispatchToken]);
        setState({
            contactNumber: state.contactNumber -1
        });
    }

    if( payload.source === PayloadSources.SERVER_ACTION &&  action.type === ActionTypes.CONTACT_ADDED){
        AppDispatcher.waitFor([ContactsStore.dispatchToken]);
        setState({
            contactNumber: action.contact.length
        });
    }


});

module.exports = ContactSummaryStore;