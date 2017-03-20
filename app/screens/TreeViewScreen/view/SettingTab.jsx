/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');

var SettingTab = React.createClass({

    render: function () {
        return (
            <div className="setting">
                <a href="#" className="hlp">
                    <i className="fa fa-question-circle fa-3x" ></i>
                </a>
                <a href="#" className="down">
                    <i className="fa fa-caret-down fa-2x" aria-hidden="true"></i>
                </a>
            </div>
        );
    }
});

module.exports = SettingTab;