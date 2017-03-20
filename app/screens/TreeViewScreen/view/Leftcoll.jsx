/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');
var User = require('./User');
var Rows = require('./Rows');
var Leftcoll = React.createClass({

    render: function () {
        return (
            <div id="leftcol">
                <User/>
                <Rows/>
            </div>
        );
    }
});

module.exports = Leftcoll;