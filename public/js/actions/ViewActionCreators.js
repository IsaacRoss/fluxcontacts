/**
 * Created by iross on 7/24/2015.
 */
var { ActionTypes } = require('../constants/constants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var ApiUtil = require('../utils/ApiUtils');


function _loadContacts () {
    AppDispatcher.handleViewAction({
        type: ActionTypes.LOAD_CONTACTS
    });
    ApiUtil.loadContacts();
}

function _deleteContact (contact) {
    AppDispatcher.handleViewAction({
        type: ActionTypes.CONTACT_DELETED,
        contact: contact
    });
    ApiUtil.deleteContact(contact);
}

function _addContact (contact) {
    AppDispatcher.handleViewAction({
        type: ActionTypes.CONTACT_ADDED,
        contact: contact
    });
    ApiUtil.addContact(contact);
}


export function deleteContact(contact){
    return _deleteContact(contact)
}

export function addContact(contact){
    return _addContact(contact);
}

export function loadContacts(){
    return _loadContacts();
}




