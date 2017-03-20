/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');

var Buttonsrow = React.createClass({

  render: function () {
    return (
        <div id="buttons" className="centerCollCls">
          <div className="btn">
					<span className="public">
						<i className="fa fa-globe" aria-hidden="true"></i>
						 Public
						<i className="fa fa-caret-down" aria-hidden="true"></i>
					</span>
            <span>
						  <button>Post</button>
					</span>
          </div>
        </div>
    );
  }
});
module.exports = Buttonsrow;