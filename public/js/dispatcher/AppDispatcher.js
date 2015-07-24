/**
 * Created by iross on 7/24/2015.
 */
var { Dispatcher } = require('flux');
var { PayloadSources } = require('../constants/constants');
var assign = require('react/lib/Object.assign');

var AppDispatcher = assign(new Dispatcher(), {

    handleServerAction (action) {
        var payload = {
            source: PayloadSources.SERVER_ACTION,
            action: action
        };
        this.dispatch(payload);
    },

    handleViewAction (action) {
        var payload = {
            source: PayloadSources.VIEW_ACTION,
            action: action
        };
        this.dispatch(payload);
    }
});

module.exports = AppDispatcher;
