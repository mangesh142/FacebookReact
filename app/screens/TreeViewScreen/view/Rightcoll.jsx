/**
 * Created by CS99 on 08/03/2017.
 */
var React = require('react');

var Rightcoll = React.createClass({

    render: function () {
        return (
            <div id="rightColl">
                <div className="pages">
                    <div className="content">
					<span className="txt">
						<a href="#">YOUR PAGES</a>
					</span>
                        <span className="arrow-right">
						<i className="fa fa-caret-right" aria-hidden="true"></i>
					</span>
                    </div>

                </div>
            </div>
        );
    }
});

module.exports = Rightcoll;