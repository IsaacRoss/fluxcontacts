/**
 * Created by Isaac on 7/31/2015.
 */

var Utilities = {
    debounce: function (fn, wait) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                fn.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

module.exports = Utilities;