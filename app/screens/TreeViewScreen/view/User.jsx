/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');

var User = React.createClass({

    render: function () {
        return (
            <div className="user">
                <a href="#">
                    <img src="img/profile-head.jpg"/>
                    <span>Mangesh Darekar</span>
                </a>
            </div>
        );
    }
});

module.exports = User;