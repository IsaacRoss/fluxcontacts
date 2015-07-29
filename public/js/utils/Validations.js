/**
 * Created by iross on 7/29/2015.
 */

var Validations = {
    required: (input, message) =>{
        if(!input){
            return message;
        }
    }
};

module.exports = Validations;