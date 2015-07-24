/**
 * Created by iross on 7/24/2015.
 */
var React = require('react');

var Contact = React.createClass({
    render: function(){
        return (
            <div className='contact'>
                <div className="name">{this.props.first} {this.props.last}</div>
                <div className="email">{this.props.email}</div>
                {this.props.showEdit ? <div className="edit">Edit</div>:
                    <div className="edit">&nbsp;</div>}
            </div>
        )
    }
});

module.exports = Contact;