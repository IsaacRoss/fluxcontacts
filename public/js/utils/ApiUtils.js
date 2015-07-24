/**
 * Created by iross on 7/24/2015.
 */
var xhr = require('../lib/xhr');
var { API, ActionTypes } = require('../constants/constants');
var ServerActionCreators = require('../actions/ServerActionCreators');

var ApiUtils = {
    loadContacts () {
        xhr.getJSON(`${API}/contacts`, (err, res) => {
            ServerActionCreators.loadedContacts(res);
        });
    },

    deleteContact (contact) {
        xhr.deleteJSON(`${API}/contacts/${contact}`, (err, res) => {
            ServerActionCreators.deletedContact(contact);
        });
    },

    addContact (contact) {
        xhr.postJSON(`${API}/contacts`, contact, (res) => {
            ServerActionCreators.addedContact(res);
        })
    }
};

module.exports = ApiUtils;

