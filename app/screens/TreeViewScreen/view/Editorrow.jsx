/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');
var EventBus = require('../../../libraries/eventdispatcher/EventDispatcher');

var oEvents = {
	HANDLE_EDITOR_POST_CLICKED: 'handle_editor_post_clicked'
};


var Editorrow = React.createClass({
	getInitialState: function () {
		var oData = {};
		oData.postText = '';
		return oData;
	},

	handleEnterPost: function (oEevent) {
		var sNewPost = oEevent.target.value;
		//console.log(sNewPost);
		this.setState({postText: sNewPost});
	},
	handelPostOnClick: function () {
		var sNewPost = this.state.postText;
		console.log(sNewPost);
		EventBus.dispatch(oEvents.HANDLE_EDITOR_POST_CLICKED, this, sNewPost);
		this.setState({postText: ''});
		/*var iPostId = this.props.postId;
		 var sNewComment = oEevent.target.value;
		 EventBus.dispatch(oEvents.HANDLE_RECTION_COMMENT_ENTERED, this, iPostId, sNewComment);*/
	},

  render: function () {
    return (
        <div>
          <div id="editor" className="centerCollCls">
						<span className="postEditor">
							<span className="img">
								<img
                    src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p40x40/15941249_2414066825313666_9146792314046365649_n.jpg?oh=7a847b4640fe5d7d109f9387e4b597c8&oe=5940434A"/>
							</span>
							<span className="text">
								<input name="post" placeholder="What's on your mind?" value={this.state.postText} onChange={this.handleEnterPost}/>
							</span>
						</span>
          </div>

					<div id="buttons" className="centerCollCls">
						<div className="btn">
					<span className="public">
						<i className="fa fa-globe" aria-hidden="true"></i>
						 Public
						<i className="fa fa-caret-down" aria-hidden="true"></i>
					</span>
							<span>
						  <button onClick={this.handelPostOnClick}>Post</button>
					</span>
						</div>
					</div>
        </div>
    );
  }
});
module.exports = {
	view: Editorrow,
	events: oEvents
};;