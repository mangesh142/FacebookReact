/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');

var Content = React.createClass({

    render: function () {
        return (
            <div className="news">
                <a href="#">
                    <img src="img/fbql-news.png"/>
                    <span>News Feed </span>
                </a>
            </div>
        );
    }
});
module.exports = Content;