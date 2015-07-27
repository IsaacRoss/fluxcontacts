/**
 * Created by iross on 7/24/2015.
 */
var React = require('react'),
    ViewActionCreator = require('../actions/ViewActionCreators');

var Contact = React.createClass({
    deleteContact(id){
        ViewActionCreator.deleteContact(id);
    },
    render: function(){
        return (
            <div className='contact'>
                <div className="name">{this.props.first} {this.props.last}</div>
                <div className="email">{this.props.email}</div>
                {this.props.showEdit ? <div className="edit" onClick={this.deleteContact.bind(this, this.props.id)}>Delete</div>:
                    <div className="edit">&nbsp;</div>}
            </div>
        )
    }
});

module.exports = Contact;