/**
 * Created by iross on 7/24/2015.
 */
var { ActionTypes } = require('../constants/constants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var ApiUtil = require('../utils/ApiUtils');


var ViewActionCreators = {
    loadContacts () {
        AppDispatcher.handleViewAction({
            type: ActionTypes.LOAD_CONTACTS
        });
        ApiUtil.loadContacts();
    },

    deleteContact (contact) {
        AppDispatcher.handleViewAction({
            type: ActionTypes.CONTACT_DELETED,
            contact: contact
        });
        ApiUtil.deleteContact(contact);
    },

    addContact (contact) {
        AppDispatcher.handleViewAction({
            type: ActionTypes.CONTACT_ADDED,
            contact: contact
        });
        ApiUtil.addContact(contact);
    }
};

module.exports = ViewActionCreators;
