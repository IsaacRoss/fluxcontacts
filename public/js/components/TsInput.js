/**
 * Created by iross on 7/29/2015.
 */
var React = require('react'),
    Validations = require('../utils/Validations'),
    Utilities = require('../utils/utilities');

var TsInput = React.createClass({
    propTypes: {
        inputChanged: React.PropTypes.func,
        fieldName: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        validationMessage: React.PropTypes.string,
        validation: React.PropTypes.func,
        placeholder: React.PropTypes.string
    },
    getInitialState(){
        return {
            value: '',
            valid: true,
            dirty: false
        }
    },
    componentWillMount(){
        this.beginValidation = Utilities.debounce(this.props.validation, 250);
    },
    handleChange(event){
        if(!this.state.dirty){
            this.setState({
                dirty: true,
                value: event.target.value
            });
        }else{
            this.setState({
                value: event.target.value
            }, function(){
                this.beginValidation(this.state.value, this.props.validationMessage, function(valid, msg){
                    this.props.inputChanged(this.props.fieldName, this.state.value, valid);
                    this.setState({
                        valid,
                        msg
                    })
                }.bind(this))
            })
        }
    },
    render(){
        var valid = this.state.valid;
        var {name, fieldName, ...other} = this.props;
        var className = valid ? 'valid' : 'invalid';
        var errorspan = valid ? <span></span> : <span className='error-message'>{this.state.msg}</span>;
        return (
            <div className='form-field'>
                <label htmlFor={fieldName}>{name}: </label>
            <input
                {...other}
                type="text"
                name={fieldName}
                value={this.state.value}
                onChange={this.handleChange}
                className={'input-' + className}
                />
                {errorspan}
            </div>
        )
    }
});

module.exports = TsInput;