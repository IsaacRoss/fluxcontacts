/**
 * Created by iross on 7/29/2015.
 */
var React = require('react'),
    Validations = require('../utils/Validations');

var TsInput = React.createClass({
    propTypes: {
        inputChanged: React.PropTypes.func,
        fieldName: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        validation: React.PropTypes.func,
        placeholder: React.PropTypes.string
    },
    getInitialState(){
        return {
            valid: false,
            value: ''
        }
    },
    handleChange(event){
        this.props.validation(this.props.value, "REQUIRED", function(valid, msg){
            this.props.inputChanged(this.props.fieldName, event.target.value, valid);
        }.bind(this))

    },
    render(){
        var {name, fieldName, ...other} = this.props;
        var className = this.state.valid ? 'valid' : 'invalid';
        return (
            <div className='form-field'>
                <label htmlFor={fieldName}>{name}: </label>
            <input
                type="text"
                name={fieldName}
                onChange={this.handleChange}
                className={'input-' + className}
                {...other} />
            </div>
        )
    }
});

module.exports = TsInput;