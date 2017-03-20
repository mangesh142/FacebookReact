/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');
var Posthead = require('./Posthead');
var Editorrow = require('./Editorrow').view;
var NewsFeed = require('./NewsFeed');


var Centercoll = React.createClass({

    render: function () {
        return (
            <div id="center-coll">
                <Posthead />
                <Editorrow/>
                {/*<Buttonrow/>*/}
                <NewsFeed posts={this.props.posts}/>
            </div>
        );
    }
});
module.exports = Centercoll;