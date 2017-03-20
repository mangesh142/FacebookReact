var eventBus = require('../../../libraries/eventdispatcher/EventDispatcher.js');

var ChildViewEvents = require('../view/child-view').events;
var ReactorEvents = require('../view/Reactor').events;
var ReactionEvent = require('../view/Reaction').events;
var EditorrowEvent = require('../view/Editorrow').events;


var MainViewStore = require('../store/main-view-store');


var TreeViewAction = (function () {

  var handleChildViewNodeClicked = function (oContext, oData) {
    MainViewStore.handleChildViewNodeClicked(oData);
  };

  var handleChildViewTextValueChanged = function (oContext, sNewValue) {
    MainViewStore.handleChildViewTextValueChanged(sNewValue);
  };

  var handleChildViewNameClicked = function (oContext, oSelectedValue) {
    MainViewStore.handleChildViewNameClicked(oSelectedValue);
  };

  var handleReactorLikeClicked = function (oCntext, iPostId) {
    MainViewStore.handleReactorLikeClicked(iPostId);
  };

  var handleReactionCommentEntered = function (oContext, iPostId, sNewComment) {
    MainViewStore.handleReactionCommentEntered(iPostId, sNewComment);
  };
  var handleEditorPostClicked = function (oContext, sPost) {
    console.log(sPost);
    MainViewStore.handleEditorPostClicked(sPost);
  }

  return {
    //Register Event Listener
    registerEvent: function () {
      eventBus.addEventListener(EditorrowEvent.HANDLE_EDITOR_POST_CLICKED, handleEditorPostClicked);
      eventBus.addEventListener(ReactionEvent.HANDLE_RECTION_COMMENT_ENTERED, handleReactionCommentEntered);
      eventBus.addEventListener(ReactorEvents.HANDLE_RICTOR_LIKE_CLICKED, handleReactorLikeClicked);
      eventBus.addEventListener(ChildViewEvents.HANDLE_CHILD_VIEW_NODE_CLICKED, handleChildViewNodeClicked);
      eventBus.addEventListener(ChildViewEvents.HANDLE_CHILD_VIEW_TEXT_VALUE_CHANGED, handleChildViewTextValueChanged);
    },

    //De-Register Event Listener
    deRegisterEvent: function () {
      eventBus.removeEventListener(EditorrowEvent.HANDLE_EDITOR_POST_CLICKED, handleEditorPostClicked);
      eventBus.removeEventListener(ReactionEvent.HANDLE_RECTION_COMMENT_ENTERED, handleReactionCommentEntered);
      eventBus.removeEventListener(ReactorEvents.HANDLE_RICTOR_LIKE_CLICKED, handleReactorLikeClicked);
      eventBus.removeEventListener(ChildViewEvents.HANDLE_CHILD_VIEW_NODE_CLICKED, handleChildViewNodeClicked);
      eventBus.removeEventListener(ChildViewEvents.HANDLE_CHILD_VIEW_TEXT_VALUE_CHANGED, handleChildViewTextValueChanged);

    }
  }
})();

module.exports = TreeViewAction;