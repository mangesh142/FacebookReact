/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');
var Content = require('./Content');

var Rows = React.createClass({

    render: function () {
        return (
            <div className="row2">
                <Content/>
                <Content/>
            </div>
        );
    }
});
module.exports = Rows;