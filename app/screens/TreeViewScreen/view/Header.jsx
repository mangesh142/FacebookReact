/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');
var LeftFilds = require('./LeftFilsds');
var RightFilds = require('./RightFilds');

var Header = React.createClass({

    render: function () {
        return (
            <div id="head">
                <LeftFilds/>
                <RightFilds/>
            </div>
        );
    }
});

module.exports = Header;
