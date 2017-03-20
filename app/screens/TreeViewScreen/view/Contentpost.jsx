/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');
var Content = React.createClass({

    render: function () {
        var oData = this.props.data;
        return (
            <div className="post">
				<span className="msg">
					<p>
						{oData.postText}
					</p>
				</span>

				<span className="postImg">
					<img src={oData.imgUrl}/>
				</span>
            </div>
        );
    }
});

module.exports = Content;