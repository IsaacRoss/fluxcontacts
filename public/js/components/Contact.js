/**
 * Created by iross on 7/24/2015.
 */
var React = require('react'),
    ViewActionCreator = require('../actions/ViewActionCreators');

var Contact = React.createClass({
    deleteContact(id){
        ViewActionCreator.deleteContact(id);
    },
    getDefaultProps(){
        return {
            first: 'FirstName',
            last: 'LastName',
            email: 'me@you.com'
        }
    },
    render: function(){
        return (
            <div className='contact'>
                <div className="name">{this.props.first} {this.props.last}</div>
                <div className="email">{this.props.email}</div>
                {this.props.showEdit ? <div className="edit-delete" onClick={this.deleteContact.bind(this, this.props.id)}>Delete</div>:
                    <div className="edit-empty"><span>-</span></div>}
            </div>
        )
    }
});

module.exports = Contact;