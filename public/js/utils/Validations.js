/**
 * Created by iross on 7/29/2015.
 */

var Validations = {
    required: (input, message, cb) => {
        if(!input){
            return cb(false, message);
        }
        return cb(true);
    },
    validEmail: (input, message, cb) => {
        return cb(/^.+@.+\..+$/.test(input), message);
    }
};

module.exports = Validations;