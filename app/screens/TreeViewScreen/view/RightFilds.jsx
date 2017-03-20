/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');
var Hometab = require('./Hometab');
var NotificationTab = require('./NotifacationTab');
var SettingTab = require('./SettingTab');

var RightFilds = React.createClass({

    render: function () {
        return (
            <div id="right">
                <Hometab/>
                <NotificationTab/>
                <SettingTab/>
            </div>
        );
    }
});

module.exports = RightFilds;