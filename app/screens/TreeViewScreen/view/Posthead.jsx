/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');

var Posthead = React.createClass({

    render: function () {
        return (
            <div id="posthead" className="centerCollCls">
				<span className="create">
					<span className="img">
						<i className="fa fa-pencil fa-1x" aria-hidden="true"></i>
					</span>
					<span className="text">Create a Post</span>
				</span>

                <span className="create">
					<span className="img2">
						<i className="fa fa-camera-retro fa-1x" aria-hidden="true"></i>
					</span>
					<span className="text2">Photo/Video Album</span>
				</span>
            </div>
        );
    }
});
module.exports = Posthead;