/**
 * Created by CS99 on 08/03/2017.
 */
var React = require('react');
var Post = require('./Post');


var NewsFeed = React.createClass({

    getPostListView: function () {
      var aPosts = this.props.posts;
      var aPostsView = [];
      for(var iIndex=0;iIndex < aPosts.length; iIndex++) {
          var oPost = aPosts[iIndex];
          aPostsView.push(<Post data={oPost}/>)
      }
      return aPostsView;
    },

    render: function () {
        var posts = this.props.posts;
        console.log(posts);

        return (
            <div id="newsFeed">
                {this.getPostListView()}
            </div>
        );
    }
});

module.exports = NewsFeed;