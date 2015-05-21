"use strict";

var React = require("react");

var styles = {
	position : "fixed",
	height   : "auto"
};

module.exports = React.createClass({

	render: function () {
		return (
			<div>
				<aside className="control-sidebar control-sidebar-dark"></aside>
				<div className="control-sidebar-bg" style={styles}></div>
			</div>
		);
	}
});
