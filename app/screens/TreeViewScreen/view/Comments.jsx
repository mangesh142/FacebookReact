/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');
var Comments = React.createClass({

    render: function () {
        var data = this.props.data;
        return (

            <div className="cmt 1">
                <span className="img">
                    <img src={data.imgUrl}/>
                </span>
                <span className="usrContent">
                    <span className="name">{data.name}
                    </span><span className="comment">{data.comment} </span>
                    <br/>
                    <span className="rect">Like - <span className="img"> </span> Reply </span>
                </span>
            </div>
        );
    }
});

module.exports = Comments;

