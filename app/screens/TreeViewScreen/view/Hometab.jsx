/**
 * Created by CS99 on 07/03/2017.
 */
var React = require('react');

var Hometab = React.createClass({

    render: function () {
        return (
            <div className="hometab">
                <div className="usrnm">
                    <a href="#">
                        <img src="img/profile-head.jpg"/>
                            <span>Mangesh</span>
                    </a>
                </div>
                <span className="hom"> Home</span>
            </div>
        );
    }
});

module.exports = Hometab;