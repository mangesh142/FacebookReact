var React = require('react');
var EventBus = require('../../../libraries/eventdispatcher/EventDispatcher');


var oEvents = {
  HANDLE_RICTOR_LIKE_CLICKED: 'handle_rictor_like_clicked'
};

var Reactor = React.createClass({

  handleLikeClicked: function () {
    var iPostId = this.props.postId;
      EventBus.dispatch(oEvents.HANDLE_RICTOR_LIKE_CLICKED, this, iPostId);

  },

  render: function () {

    return (
        <div className="reactTab">
          <div className="reactLow">
							<span className="like" onClick={this.handleLikeClicked}>
								<i className="fa fa-thumbs-up" aria-hidden="true"></i> Like
							</span>
            <span className="comment">
								<i className="fa fa-comment" aria-hidden="true"></i> Comment
							</span>
            <span className="share">
								<i className="fa fa-share" aria-hidden="true"></i> Share
							</span>
          </div>
        </div>
    );
  }
});

module.exports = {
  view: Reactor,
  events: oEvents
};
