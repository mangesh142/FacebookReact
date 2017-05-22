var _ = require('lodash');

var MicroEvent = require('../../../libraries/microevent/MicroEvent.js');
var MainViewProps = require('./model/main-view-props');
var AppData = require('./model/main-view-app-data');


var TreeViewStore = (function () {

  var oComponentProps = MainViewProps;

  var triggerChange = function () {
    TreeViewStore.trigger('change');
  };

  var _getViewData = function () {
    /*return oComponentProps.getData();*/
  };

  var _handleChildViewNodeClicked = function (oData) {
    /*console.log(oData);
     var sValue = oComponentProps.getValue();
     var aData = oComponentProps.getData();
     var oNewData = {};
     oNewData.id = aData.length;
     oNewData.name = sValue;
     //dfsdfs
     aData.push(oNewData);
     triggerChange();*/
  };

  var _handleChildViewTextValueChanged = function (sNewValue) {
    console.log(sNewValue);
    //oComponentProps.setValue(sNewValue);
    triggerChange();
  };

  var _handleChildViewNameClicked = function (oSelectedValue) {
    //oComponentProps.setSelectedValue(oSelectedValue);
    triggerChange();
  };
  var _handleReactorLikeClicked = function (iPostId) {
    var aPostData = oComponentProps.getPostData();
    for (var iIndex = 0; iIndex < aPostData.length; iIndex++) {
      var oPostData = aPostData[iIndex];
      if (oPostData.postId == iPostId) {
        oPostData.reaction.like = oPostData.reaction.like + 1;
      }
    }
    triggerChange();
  };

  var _handleReactionCommentEntered = function (iPostId, sNewComment) {
    var aPostData = oComponentProps.getPostData();
    for (var iIndex = 0; iIndex < aPostData.length; iIndex++) {
      var oPostData = aPostData[iIndex];
      if (oPostData.postId == iPostId) {
        var aComments = oPostData.reaction.comments;
        var oNewComment = {
          name: "Mangesh Darekar",
          imgUrl: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p40x40/15941249_2414066825313666_9146792314046365649_n.jpg?oh=7a847b4640fe5d7d109f9387e4b597c8&oe=5940434A",
          comment: sNewComment
        };
        aComments.push(oNewComment);
      }
    }
    triggerChange();
  };

  var _handleEditorPostClicked= function(sPost){
    console.log(sPost);
    var aPostData = oComponentProps.getPostData();
    var oNewComment = {
      postId: aPostData.length+1,
      postHead: {
        name: "Mangesh Darekar",
        time: "1 sec",
        imgUrl: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p40x40/15941249_2414066825313666_9146792314046365649_n.jpg?oh=7a847b4640fe5d7d109f9387e4b597c8&oe=5940434A",
      },
      content: {
        postText: sPost,
        imgUrl: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-0/s480x480/16938811_1591653710858946_5653607659183136248_n.jpg?oh=0d396c95bdae61892aa8e6da634ec429&oe=596AA441",
      },

      reaction: {
        like: 0,
        comments: [

        ]
      }
    }
    aPostData.push(oNewComment);
    triggerChange();
  };

  return {

    getData: function () {
      var data = {
        appData: AppData,
        componentProps: oComponentProps
      };

      return data;
    },

    fetchGlobalData: function (aPostData) {
      oComponentProps.setPostData(aPostData);
      console.log(aPostData);
    },

    getViewData: function () {
      return _getViewData();
    },

    handleChildViewNodeClicked: function (oData) {
      _handleChildViewNodeClicked(oData);
    },


    handleChildViewTextValueChanged: function (sNewValue) {
      _handleChildViewTextValueChanged(sNewValue);
    },

    handleChildViewNameClicked: function (oData) {
      _handleChildViewNameClicked(oData);
    },

    handleReactorLikeClicked: function (iPostId) {
      _handleReactorLikeClicked(iPostId);
    },

    handleReactionCommentEntered: function (iPostId, sNewComment) {
      _handleReactionCommentEntered(iPostId, sNewComment);
    },
    handleEditorPostClicked: function (sPost) {
      _handleEditorPostClicked(sPost);
    }

  }
})();

MicroEvent.mixin(TreeViewStore);

module.exports = TreeViewStore;
