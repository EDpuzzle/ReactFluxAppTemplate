"use strict";

var React = require("react");

module.exports = React.createClass({

	render: function () {
		return (
			<footer className="main-footer">
        {/* To the right */}
        <div className="pull-right hidden-xs">
          Anything you want
        </div>
        {/* Default to the left */}
        <strong>Copyright © 2015 <a href="#">EDpuzzle, Inc</a>.</strong> All rights reserved.
      </footer>
		);
	}
});