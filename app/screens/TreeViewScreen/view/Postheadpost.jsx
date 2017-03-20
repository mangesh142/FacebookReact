var React = require('react');
var Posthead = React.createClass({

    render: function () {
        var oData = this.props.data;
        return (
            <div>
                    <div className="postHead">
						<span className="img">
							<img src={oData.imgUrl}/>
						</span>
                        <span className="name">{oData.name}<br/>
							<span className="comment">{oData.time} <span className="img"> </span> <i className="fa fa-globe" aria-hidden="true"></i> </span>
						</span>
                    </div>
                <div className="rightMenu">
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div><br/><br/><br/>
            </div>
        );
    }
});

module.exports = Posthead;
