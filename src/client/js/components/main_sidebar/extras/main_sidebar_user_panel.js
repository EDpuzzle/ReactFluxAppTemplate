"use strict";

var React = require("react");

module.exports = React.createClass({

	render: function () {
		return (
			<div className="user-panel">
        <div className="pull-left image">
          <img src="assets/user2-160x160.jpg" className="img-circle" alt="User Image" />
        </div>
        <div className="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
		);
	}
});
