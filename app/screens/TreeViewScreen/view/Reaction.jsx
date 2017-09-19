var React = require('react');
var Likecount = require('./Likecount')
var Comments = require('./Comments');
var EventBus = require('../../../libraries/eventdispatcher/EventDispatcher');


var oEvents = {
  HANDLE_RECTION_COMMENT_ENTERED: 'handle_rection_comment_entered'
};


var Reaction = React.createClass({

  getInitialState: function () {
    var oData = {};
    oData.commentText = '';
    return oData;
  },

  handleEnterComment: function (oEevent) {
    var sNewComment = oEevent.target.value;
    this.setState({commentText: sNewComment});
    /*var iPostId = this.props.postId;
    var sNewComment = oEevent.target.value;
    EventBus.dispatch(oEvents.HANDLE_RECTION_COMMENT_ENTERED, this, iPostId, sNewComment);*/
  },


  handleCommentChanged: function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { //Enter keycode
      var iPostId = this.props.postId;
      var sNewComment = this.state.commentText;
      EventBus.dispatch(oEvents.HANDLE_RECTION_COMMENT_ENTERED, this, iPostId, sNewComment);
      this.setState({commentText: ''});
    }
  },

  getCommentView: function () {
    var oReaction = this.props.data;
    var aComments = oReaction.comments;

    var aCommentView = [];
    for (var iIndex = 0; iIndex < aComments.length; iIndex++) {
      var oComment = aComments[iIndex];
      aCommentView.push(<Comments data={oComment}/>)
    }
    return aCommentView;
  },

  render: function () {
    var oReaction = this.props.data;
    return (
        <div id="reactions">
          <div className="reactBox">
            <Likecount count={oReaction.like}/>

            <div className="Allcomments">
              <div>
                {this.getCommentView()}
              </div>
            </div>
            <div className="commentCount">
              <div className="content">
                <span className="img">
                <img
                    src="img/profile-head.jpg"/>
                </span>
                <div className="cmtEditor">
                  <span className="input">

                      <input name="comment" placeholder="Write a comment.." value={this.state.commentText} ref="commentText"
                           onChange={this.handleEnterComment} onKeyDown={this.handleCommentChanged}/>

                  </span>
                  <span className="icon">
                    <i style={{margin: '10px'}} className="fa fa-camera" aria-hidden="true"></i>
                    <i className="fa fa-smile-o" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
    );
  }
});

module.exports = {
  view: Reaction,
  events: oEvents
};