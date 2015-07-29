/**
 * Created by iross on 7/29/2015.
 */
var React = require('react'),
    Validations = require('../utils/Validations');

var TsInput = React.createClass({
    propTypes: {
        onChange: React.PropTypes.func,
        fieldName: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired
    },
    getInitialState(){
        return {
            value: this.props.defaultValue || '',
            validationMessage: ''
        }
    },
    handleChange(event){
        var validation = Validations.required(event.target.value, "* This field is required.");
        this.setState({
            value: event.target.value,
            validationMessage: validation
        });
        this.props.onChange(this.props.fieldName, event.target.value);
    },
    render(){
        return (

            <div className='form-field'>
                <label htmlFor="first_name">{this.props.name}: </label>
            <input
                type="text"
                name="first_name"
                value={this.state.value}
                onChange={this.handleChange} />
                <div className="validation-error">{this.state.validationMessage}</div>
            </div>

        )

    }
});

module.exports = TsInput;