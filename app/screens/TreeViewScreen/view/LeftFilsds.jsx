/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');

var Leftfilsds = React.createClass({

    render: function () {
        return (
                <div id="left">
                    <div id="icon">
                        <img id="logo1" src="img/fb-icon.PNG"/>
                    </div>
                    <form>
                        <input type="text" name="search" placeholder="Search Facebook"/>
                        <button><i className="fa fa-search fa-lg" aria-hidden="true"></i></button>
                    </form>
                </div>
        );
    }
});

module.exports = Leftfilsds;