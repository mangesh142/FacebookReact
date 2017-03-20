var React = require('react');
var Rection = require('./Reaction').view;
var Posthead = require('./Postheadpost');
var Content = require('./Contentpost');
var Reactor = require('./Reactor').view;

var Post = React.createClass({

    render: function () {
        var oPost = this.props.data;
        var oPostHeadData = oPost.postHead;
        var opostContent = oPost.content;
        var oReaction = oPost.reaction;
        return (
            <div>
                <div id="news" className="centerCollCls">
                    <Posthead data={oPostHeadData}/>
                    <Content data = {opostContent}/>

                    <br/><br/><br/>
                    <Reactor postId={oPost.postId}/>
                </div>
                <Rection data = {oReaction} postId={oPost.postId}/>
            </div>
        );
    }
});

module.exports = Post;
