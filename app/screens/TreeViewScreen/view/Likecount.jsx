/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');
var Likecount = React.createClass({

    render: function () {
        return (
            <div className="likeCount">
                <div className="content">
                    <img src="img/like.png" height="850" width="850"/>
                    <span> {this.props.count}</span>
                </div>
            </div>
        );
    }
});

module.exports = Likecount;
