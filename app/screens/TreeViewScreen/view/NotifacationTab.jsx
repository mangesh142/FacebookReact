/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');

var NotifacationTab = React.createClass({

    render: function () {
        return (
            <div className="notification">
                <a href="#" className="frdreq">
                    <img src="img/frdreq.png"/>
                </a>
                <a href="#" className="msg">
                    <img src="img/fb_messenger.png"/>
                </a>
                <a href="#" className="msg">
                    <img src="img/earth.svg"/>
                </a>
            </div>
        );
    }
});

module.exports = NotifacationTab;
