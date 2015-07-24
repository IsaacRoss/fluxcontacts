/**
 * Created by iross on 7/24/2015.
 */
var keyMirror = require('react/lib/keyMirror');

module.exports = {
    API: 'http://localhost:3000',


    ActionTypes: keyMirror({
        CONTACTS_LOADED: null,
        LOAD_CONTACTS: null,
        CONTACT_DELETED: null,
        CONTACT_ADDED: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })
};

